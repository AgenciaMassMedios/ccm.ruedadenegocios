<?php

use MVC4PHP\SQLTable;

$name = "roomdetails";
$fields = ["code:key", "user:key", "name"];
$pk = "code";
return new SQLTable($name, $fields, $pk);
