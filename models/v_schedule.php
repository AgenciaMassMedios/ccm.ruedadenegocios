<?php

use MVC4PHP\SQLTable;

$name = "scheduledetails";
$fields = ["code:key", "room:key", "startdt", "oauth", "name"];
$pk = "code";
return new SQLTable($name, $fields, $pk);
