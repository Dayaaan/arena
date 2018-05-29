<?php
$page = 'mainArena';
include '../services/arenaServices.php';
include '../services/tools.php';
include '../views/header.phtml';

include '../views/mainFirst.phtml';


?>
<script type="text/xtemplate" id="heroes">
<?php
$heroes = getHeroList();

echo json_encode($heroes);
?>
</script>
<script>

	var heroes = document.querySelector("#heroes");
	var heroesHTML = heroes.innerHTML;
	console.log(heroesHTML);
	var listHero = JSON.parse(heroesHTML);
	console.log(listHero);
</script>

<?php
include '../views/mainArena.phtml';



include '../views/mainEnd.phtml';
include '../views/footer.phtml';