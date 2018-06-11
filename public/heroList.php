<?php

include '../services/arenaServices.php';
include '../services/tools.php';

$heroList = getHeroList();
$heroListJSON = json_encode($heroList);
header("Content-Type: text/JSON");
echo $heroListJSON;