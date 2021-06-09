<?php
require "../vendor/autoload.php";
require "../resources/scripts/mvc4php/globalsincontrollers.php";

use MVC4PHP\Controller;
use MVC4PHP\Model;
use MVC4PHP\SQLClauses;

$controller = new Controller();

$controller->addAction("login", function () {
    if (isset($_POST['email'])) $email = $_POST['email'];
    else if (isset($_GET['email'])) $email = $_GET['email'];
    else throw new Exception("No se ha recibido correo");
    $user = Controller::useModel("t_users")->get($email);
    if ($user == null) throw new Exception("No se ha encontrado el usuario");
    if ($user->type == "A") {
        $meeting = Controller::useModel("v_rooms")->getAll(new SQLClauses([
            "wherePairs" => [
                ["name" => "user", "value" => $email]
            ],
            "limit" => 1
        ]));
        if ($meeting == null) throw new Exception("No se ha encontrado una sala para usted.");
        $meetings = Controller::useModel("v_schedule")->getAll(new SQLClauses([
            'wherePairs' => [
                ["name" => "room", "value" => $meeting[0]->code]
            ]
        ]));
        Controller::sendResponse(json_encode([
            "status" => "success",
            "code" => $meeting[0]->code,
            "name" => $meeting[0]->name,
            "agenda" => Model::toJSONArray($meetings),
            "type" => "A"
        ]));
    } else {
        $meetings = Controller::useModel("t_schedule")->getAll(new SQLClauses([
            "wherePairs" => [
                ["name" => "user", "value" => $email]
            ],
            "orderPairs" => ["startdt"]
        ]));
        if ($meetings == null) throw new Exception("No se han encontrado reuniones agendadas para usted.");
        $flag = "";
        foreach ($meetings as $meeting) {
            if ($meeting->oauth == "Y") {
                $flag = $meeting;
                break;
            }
        }
        if ($flag != "") {
            $room = Controller::useModel("v_rooms")->get($flag->room);
            Controller::sendResponse(json_encode([
                "status" => "success",
                "code" => $room->code,
                "name" => $room->name,
                "meeting" => $meeting->code,
                "type" => "V"
            ]));
        } else Controller::sendResponse(json_encode([
            "status" => "success",
            "type" => "W",
            "email" => $email
        ]));
    }
});

$controller->addAction("oauth", function () {
    if (!isset($_GET['code'])) throw new Exception("No se ha recibido código");
    $t_schedule = Controller::useModel("t_schedule");
    $schedule = $t_schedule->get($_GET['code']);
    if ($schedule == null) throw new Exception("No se ha encontrado la cita");
    if ($schedule->oauth == "N") $flag = "Y";
    else $flag = "N";
    $t_schedule->update($_GET['code'], [$flag], new SQLClauses([
        "fields" => ["oauth"]
    ]));
    Controller::sendResponse(json_encode(["status" => "success"]));
});

$controller->addAction("status", function () {
    if (!isset($_GET['code'])) throw new Exception("No se ha recibido código");
    $schedule = Controller::useModel("t_schedule")->get($_GET['code']);
    if($schedule == null) Controller::sendResponse(json_encode(["status" => "success", "schedule" => false]));
    if($schedule->oauth == "N") Controller::sendResponse(json_encode(["status" => "success", "schedule" => false]));
    else Controller::sendResponse(json_encode(["status" => "success", "schedule" => true]));
});

try {
    $controller->processAction();
} catch (Exception $ex) {
    Controller::sendResponse(json_encode(["status" => "error", "message" => $ex->getMessage()]));
}
