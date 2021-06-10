<?php
require_once "../vendor/autoload.php";
require_once "../resources/scripts/mvc4php/globalsinviews.php";

use MVC4PHP\View;

$view = new View();
if(!isset($_GET['name'])) $view->redir("stands");

View::render(function () {
    View::insertComponent("views/stands/stand/structure");
}, [
    "title" => "Reunión",
    "js" => ["https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"],
    "css" => ["resources/scripts/views/stand/stand.v2.min.css", "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css"],
    "module" => ["resources/scripts/views/stand/stand.v1.min.js"]
]);