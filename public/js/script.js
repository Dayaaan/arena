"use strict";
var heros = {};
$(function () {
    var url = 'heroList.php';
    $.getJSON(url, function(heroList) {

        console.log(heroList);
        $('.mainListHero2').html("");
        

        for (var i = 0; i < heroList.length; i++) {
            heros[heroList[i].id] = heroList[i];

            $('.mainListHero2').append("<div class='divHero2' data-id='" + heroList[i].id + "'><h3>" + heroList[i].name + "</h3><br>" + 
                               "<p>HP : " + heroList[i].hp + "</p><br>" + 
                               "<p>Armure : " + heroList[i].armor + "</p><br>" +
                               "<p>Weapon : " + heroList[i].weapon_name + "</p><br>" + 
                               '<img src="' + heroList[i].avatar + '"/></div>' );
        }

        console.log(heros);

        var combatants = $(".divHero2");

        for (var l = 0; l < combatants.length; l++) {
            var list = combatants[l];

            list.addEventListener("click", function() {
                if (this.classList.contains("selecteds")) {
                    this.classList.toggle("selecteds");
                }else {
                    var selecteds = document.querySelectorAll(".selecteds");
                    if (selecteds.length >= 2) {
                        selecteds[0].classList.toggle("selecteds");
                    };

                    this.classList.toggle("selecteds");
                };
                this.style.opacity = 1;
            });
        };
    })

    

    var btnCombat = document.querySelector("button");

    btnCombat.addEventListener("click", function() {
        var selecteds = document.querySelectorAll(".selecteds");
        if (selecteds.length != 2) {
            alert("Vous n'avez pas selectionné deux combatants");
        };
        var nodeCombatant1 = selecteds[0];
        var nodeCombatant2 = selecteds[1];

        var id1 = nodeCombatant1.getAttribute('data-id');
        var combatant1 = heros[id1];
        var id2 = nodeCombatant2.getAttribute('data-id');
        var combatant2 = heros[id2];

        console.log(combatant1, combatant2);

        var champion = fightToDeath(combatant1, combatant2);
        var para3 = document.querySelector(".para3");
        para3.innerHTML = "<h3>Le gagnant est " + champion.name + "</h3>";
        console.log("Le gagnant est ", champion.name);
    });

    function isALive(fighter) {
        if (fighter.hp > 0) {
            return true;
        }else {
            return false;
        }
    };

    function getRamdomNumber(min,max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    function strike(attacker,defender) {
        console.log("strike", attacker.name, defender.name);
        var min = attacker.damage_min;
        var max = attacker.damage_max;
        var damage = getRamdomNumber(min,max) - defender.armor; 
        defender.hp = defender.hp - damage;

        var para1 = document.querySelector(".para1");
        para1.innerHTML = "nombre de pdv de " + "<b>" + attacker.name + " = " + attacker.hp + "</b>"+ "<br>" + "nombre de pdv de " + "<b>" + defender.name + " = " + defender.hp + "</b>";
        console.log("nombre de pdv", defender.hp);

        if (defender.hp < 0) {
            defender.hp = 0;
        }
    };

    function fightToDeath(fighter,fighter2) {
        var maxround = 10;
        var count = 0;
        var winner;
        while (isALive(fighter) && isALive(fighter2) && count < maxround) {
            strike(fighter,fighter2);
            strike(fighter2,fighter);
            count++;
        }
        var para2 = document.querySelector(".para2");
        para2.innerHTML = "combat effectué en " + count + " round";
        console.log("combat effectué en " , count , " round");
        if (isALive(fighter)) {
            winner = fighter;
        }else {
            winner = fighter2;
        }
        return winner;  
    };










   
});/*END*/


   
