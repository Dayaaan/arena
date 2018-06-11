<?php 

function getConnection() {
	$bdd = new PDO('mysql:host=localhost;dbname=arena;charset=utf8', 'root', 'troiswa', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
	$bdd->exec('SET NAMES UTF8');
	return $bdd;
}

function createHero($name,$hp,$armor,$weapon_id,$avatar) {
	$bdd = getConnection();
	$statement = $bdd->prepare("INSERT INTO hero (name,hp,armor,weapon_id,avatar) VALUES ('$name', '$hp', '$armor','$weapon_id','$avatar')");
	$statement->execute();
}

function getHeroList() {
	$bdd = getConnection();
	$statement = $bdd->prepare('SELECT id,hero.name,weapon.name AS weapon_name,armor,hp,avatar,image,weapon.damage_min, weapon.damage_max  FROM hero JOIN weapon ON weapon.weapon_id = hero.weapon_id');
	$statement->execute();
	$heroList = $statement->fetchAll(PDO::FETCH_ASSOC);
	return $heroList;
}

function deleteHero($id) {
	$bdd = getConnection();
	$statement = $bdd->prepare("DELETE FROM hero WHERE id = $id");
	$statement->execute();
}