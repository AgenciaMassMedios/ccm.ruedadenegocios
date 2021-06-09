<?php

use MVC4PHP\View; ?>

<div id="vtcontainer">
    <div id="ui">

        <img id="render" src="resources/images/stands/main.png" alt="Stands">
        <div id="space">
            <div id="container-space">
                <?php
                if (!isset($_GET['pabellon'])) echo View::insertComponent("views/stands/salas/green");
                else if ($_GET['pabellon'] == "verde") echo View::insertComponent("views/stands/salas/green");
                else if ($_GET['pabellon'] == "naranja") echo View::insertComponent("views/stands/salas/orange");
                else echo View::insertComponent("views/stands/salas/green");
                ?>
            </div>
        </div>

    </div>
</div>

<div id="rotate">
    <img src="resources/images/rotatedevice.gif" alt="rotate device">
</div>