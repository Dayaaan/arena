<?php
$page = 'mainHeroList';
include '../services/arenaServices.php';
include '../services/tools.php';
include '../views/header.phtml';

include '../views/mainFirst.phtml';


$heroList = getHeroList();


include '../views/mainHeroList.phtml';



include '../views/mainEnd.phtml';
include '../views/footer.phtml';