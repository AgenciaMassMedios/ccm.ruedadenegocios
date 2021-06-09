<?php

use MVC4PHP\View;

$daily = isset($data["daily"]) ? true : false;
$title = isset($data["title"]) ? $data["title"] . " - Rueda Multisectorial - CCMPC" : "Rueda de Negocios Multisectorial - CCMPC";
$css = isset($data["css"]) ? $data["css"] : [];
$js = isset($data["js"]) ? $data["js"] : [];
$module = isset($data["module"]) ? $data["module"] : [];
$messages = View::validateMessages();

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="keywords" content="rueda de negocios, clientes, multisectorial, comprar, negocio, empresa, camara de comercio, manizales, colombia" />
    <meta name="author" content="CCMPC & Mass Medios" />
    <title><?= $title ?></title>
    <?= View::insertComponent("shared/plugins/favicon"); ?>
    <?= View::insertComponent("shared/scripts/css"); ?>
    <?= View::insertComponent("shared/plugins/analytics"); ?>
    <?php if($daily) ?> <script crossorigin src="resources/scripts/modules/daily/daily-iframe.min.js"></script> <?php ?>

    <?php if (count($css) > 0) foreach ($css as $path) { ?>
        <link rel="stylesheet" href="<?= $path; ?>"><?php } ?>
</head>

<body>
    <?php
    $content();
    ?>


    <?= View::insertComponent("shared/scripts/js"); ?>


    <?php if (count($js) > 0) foreach ($js as $path) { ?>
        <script src="<?= $path; ?>"></script><?php } ?>

    <?php if (count($module) > 0) foreach ($module as $path) { ?>
        <script type="module" src="<?= $path; ?>"></script><?php } ?>
</body>

</html>