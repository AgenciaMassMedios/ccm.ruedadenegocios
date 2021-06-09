<?php

use MVC4PHP\SQLTable;

$name = "lives";
$fields = ["code:key", "src", "startdt", "enddt"];
$pk = "code";
return new SQLTable($name, $fields, $pk);
