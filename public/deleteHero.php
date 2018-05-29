<?php 

include '../services/arenaServices.php';
include '../services/tools.php';


$id = $_GET['index'];

deleteHero($id);
header("Location:mainHeroList.php");