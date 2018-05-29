"use strict";

var chevalier = {
    name: "Fafnir",
    armor: 5,
    hp: 30,
    damage: {
        min: 5,
        max: 12
    },
    avatarUrl: "https://vignette.wikia.nocookie.net/finalfantasy/images/f/ff/Chevalier_FFE.png/revision/latest?cb=20140621175103&path-prefix=fr"
};

var aragorn = {
    name: "Aragorn",
    armor: 5,
    hp: 30,
    damage: {
        min: 5,
        max: 12
    },
    avatarUrl: "http://www.shiness-game.com/img/game/characters/poky_avatar.png"
};

var gladiator = {
    name: "Maximus",
    armor: 10,
    hp: 60,
    damage: {
        min: 10,
        max: 20
    },
    avatarUrl: "https://i.pinimg.com/originals/de/4f/9c/de4f9c1bd80ae215079fea7b5d94f580.jpg"
};

var sayain = {
    name: "Sangoku",
    armor: 50,
    hp: 100,
    damage: {
        min: 30,
        max: 100
    },
    avatarUrl: "https://vignette.wikia.nocookie.net/dragonball/images/0/09/Goku.png/revision/latest?cb=20160204151954"
};

var heros = [
    chevalier,
    aragorn,
    gladiator,
    sayain
];

for (var i = 0; i < heros.length; i++) {

    var hero = heros[i];

    var nodeTemplate = document.querySelector("#template-card-hero");

    var htmlTemplate = nodeTemplate.innerHTML;

    htmlTemplate = htmlTemplate.replace("{{ ID }}", i);
    htmlTemplate = htmlTemplate.replace("{{ name }}", hero.name);
    htmlTemplate = htmlTemplate.replace("{{ avatarUrl }}", hero.avatarUrl);
    htmlTemplate = htmlTemplate.replace("{{ hp }}", hero.hp);
    htmlTemplate = htmlTemplate.replace("{{ armor }}", hero.armor);
    htmlTemplate = htmlTemplate.replace("{{ damage.min }}", hero.damage.min);
    htmlTemplate = htmlTemplate.replace("{{ damage.max }}", hero.damage.max);

    var nodeContainer = document.querySelector('#arena');

    nodeContainer.innerHTML += htmlTemplate;
};


var combatants = document.querySelectorAll("li");

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
    var min = attacker.damage.min;
    var max = attacker.damage.max;
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
