<?php

use MVC4PHP\SQLTable;

$name = "rooms";
$fields = ["code:key", "user:key"];
$pk = "code";
return new SQLTable($name, $fields, $pk);
