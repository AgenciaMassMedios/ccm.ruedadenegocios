<?php

use MVC4PHP\SQLTable;

$name = "users";
$fields = ["email:key", "name", "type"];
$pk = "email";
return new SQLTable($name, $fields, $pk);
