<?php
require "../vendor/autoload.php";
require "../resources/scripts/mvc4php/globalsincontrollers.php";

use MVC4PHP\Controller;
$controller = new Controller();


$controller->addAction("get", function () {
    if(!isset($_GET['code'])) throw new Exception("No se ha recibido código");
    $company = Controller::useModel("t_companies")->get($_GET['code']);
    if($company==null) throw new Exception("No se ha encontrado el stand");
    try{
        $size = sizeof(array_diff(scandir("../resources/docs/stands/companies/" . $_GET['code'] . "/images"), ['.', '..']));
    } catch (Exception $ex) {
        $size = 0;
    }
    Controller::sendResponse(json_encode([
        "status" => "success",
        "code" => $_GET['code'],
        "imgs" => $size,
        "social" => $company->social
    ]));
});

try {
    $controller->processAction();
} catch (Exception $ex) {
    Controller::sendResponse(json_encode(["status" => "error", "message" => $ex->getMessage()]));
}
