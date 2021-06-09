<?php
require_once "../vendor/autoload.php";
require_once "../resources/scripts/mvc4php/globalsinviews.php";

use MVC4PHP\View;

View::render(function () {
    View::insertComponent("views/inicio/structure");
}, [
    "css" => ["resources/scripts/views/inicio/inicio.v1.min.css"]
]);