<?php
require "../vendor/autoload.php";
require "../resources/scripts/mvc4php/globalsincontrollers.php";

use MVC4PHP\Controller;
use MVC4PHP\SQLClauses;

$controller = new Controller();

$controller->addAction("check", function () {
    $t_lives = Controller::useModel("t_lives");
    $lives = $t_lives->getAll(new SQLClauses([
        "wherePairs" => [
            ["name" => "startdt", "value" => getnowdate(), "type" => "<="],
            ["name" => "enddt", "value" => getnowdate(), "type" => ">="]
        ]
    ]));
    if ($lives == null) Controller::sendResponse(json_encode(["status" => "success", "app" => "none"]));
    else Controller::sendResponse(json_encode([
        "status" => "success",
        "app" => "video",
        "src" => $lives[0]->src,
        "enddt" => explode(' ', $lives[0]->enddt)[0] . 'T' . explode(' ', $lives[0]->enddt)[1]
    ]));
});


try {
    $controller->processAction();
} catch (Exception $ex) {
    Controller::sendResponse(json_encode(["status" => "error", "message" => $ex->getMessage()]));
}
