<?php

use MVC4PHP\SQLTable;

$name = "companies";
$fields = ["code:key", "social"];
$pk = "code";
return new SQLTable($name, $fields, $pk);
