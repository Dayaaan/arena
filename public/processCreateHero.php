<?php 


include '../services/arenaServices.php';
include '../services/tools.php';


if (count($_POST) == 0) {
	die('Veuillez remplir les champs');
}

$name = $_POST["name"];
$hp = $_POST["hp"];
$armor = $_POST["armor"];
$weapon_id = $_POST['weapon_id'];
$avatar = $_POST["avatar"];
createHero($name,$hp,$armor,$weapon_id,$avatar);
header("Location:mainHeroList.php");
exit;

