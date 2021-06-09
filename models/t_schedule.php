<?php

use MVC4PHP\SQLTable;

$name = "schedule";
$fields = ["code:key", "user:key", "room:key", "startdt", "oauth"];
$pk = "code";
return new SQLTable($name, $fields, $pk);
