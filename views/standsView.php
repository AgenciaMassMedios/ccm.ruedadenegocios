<?php
require_once "../vendor/autoload.php";
require_once "../resources/scripts/mvc4php/globalsinviews.php";

use MVC4PHP\View;

View::render(function () {
    View::insertComponent("views/stands/structure");
}, [
    "title" => "Stands",
    "css" => ["resources/scripts/views/stands/stands.v1.min.css"],
    "module" => ["resources/scripts/views/stands/stands.v1.min.js"]
]);