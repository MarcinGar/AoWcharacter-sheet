

function calculateBaseScores() {
    var str = document.getElementById("str").value;
    var strBase = Math.ceil(str / 2);
    document.getElementById("strBase").value = strBase;
    var dex = document.getElementById("dex").value;
    var dexBase = Math.ceil(dex / 2);
    document.getElementById("dexBase").value = dexBase;
    var log = document.getElementById("log").value;
    var logBase = Math.ceil(log / 2);
    document.getElementById("logBase").value = logBase;
    var wil = document.getElementById("wil").value;
    var wilBase = Math.ceil(wil / 2);
    document.getElementById("wilBase").value = wilBase;
    document.getElementById("initative").value = 1;
    var movement = 8;
    document.getElementById("movement").value = movement;
    var rank = document.getElementById("rank").value;
    var maxBP = strBase + (rank - 1) * 10;
    document.getElementById("maxBP").value = maxBP;
    var meleeDB = Math.ceil((str - 60) / 5);
    document.getElementById("meleeDB").value = meleeDB;
    var rangedDB = Math.ceil((dex - 60) / 5);
    document.getElementById("rangedDB").value = rangedDB;
    document.getElementById("maxQi").value = 3;
    var alchScore = logBase;
    var alchLev = document.getElementById("attr_alchemist").value;
    document.getElementById("alchScore").innerHTML = alchScore + alchLev * 10;
    var deteScore = logBase;
    var deteLev = document.getElementById("attr_detective").value;
    document.getElementById("deteScore").innerHTML = deteScore + deteLev * 10;
    var diviScore = wilBase;
    var diviLev = document.getElementById("attr_diviner").value;
    document.getElementById("diviScore").innerHTML = diviScore + diviLev * 10;
    var leadBase = wilBase;
    var leadLev = document.getElementById("attr_leader").value;
    document.getElementById("leadScore").innerHTML = leadBase + leadLev * 10;
    var mystScore = wilBase;
    var mystLev = document.getElementById("attr_mystic").value;
    document.getElementById("mystScore").innerHTML = mystScore + mystLev * 10;
    var scouScore = logBase;
    var scouLev = document.getElementById("attr_scout").value;
    document.getElementById("scouScore").innerHTML = scouScore + scouLev * 10;
    var schoScore = logBase;
    var schoLev = document.getElementById("attr_scholar").value;
    document.getElementById("schoScore").innerHTML = schoScore + schoLev * 10;
    var sorcScore = wilBase;
    var sorcLev = document.getElementById("attr_sorcerer").value;
    document.getElementById("sorcScore").innerHTML = sorcScore + sorcLev * 10;
    var thieScore = dexBase;
    var thieLev = document.getElementById("attr_thief").value;
    document.getElementById("thieScore").innerHTML = thieScore + thieLev * 10;
    var currentBP = maxBP;
    document.getElementById("currentBP").value = currentBP;
    var characterPoints = (230 - str - dex - log - wil);
    if (characterPoints < 0) {
        this.document.getElementById("CharacterPoints").innerHTML = "0 points remaining";
    } else {
        document.getElementById("CharacterPoints").innerHTML = "CharacterPoints: " + characterPoints;
    }
    var cultivation;
    if (characterPoints < 0) {
        this.cultivation = Math.abs(characterPoints);
        this.document.getElementById("cultivation").innerHTML = "Cultivation used" + this.cultivation;
    } else {
        this.document.getElementById("cultivation").innerHTML = "0";
    }

}

function rollDice() {
    var random = 1 * Math.floor(Math.random() * (99));
    //var integral = Math.ceil(Math.random() * (10));
    var result = random;
    if(result%11===0 && result>10 || result===100) {
        var critical = result;
        document.getElementById("result").innerHTML = "You rolled a critical " + critical + "!!!.";
    }
    else {
        document.getElementById("result").innerHTML = "You rolled " + result;
    }
}



    