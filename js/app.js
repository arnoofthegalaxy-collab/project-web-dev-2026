var speler = "";

var score = 0;

/* 
Deze functie start het spel door de naam van de speler op te halen uit een inputveld met id "naam". Als de naam leeg is, 
wordt er een waarschuwing weergegeven. Anders wordt er een welkomstbericht getoond en wordt de gebruiker doorgestuurd naar "gamep2.html".
 */
function startspel() {
  speler = document.getElementById("naam");
  if (speler.value.trim() === "") {
    alert("Voer je naam in!");
    return;
  }
  var naam = speler.value.trim();
  alert("Welkom, " + naam + "! Klik op OK om te beginnen.");
  window.location.href = "gamep2.html";
}

/*
 Deze functie verhoogt de score met 1 punt. Als de score 10 of hoger is, wordt het element met id "ghost10" zichtbaar 
 en het element met id "ghost" onzichtbaar. Vervolgens wordt de score weergegeven in een element met id "score".
 */
function verhoogScore() {
  score++;
  if (score >= 10) {
    document.getElementById("ghost10").style.visibility = "visible";
    document.getElementById("ghost").style.visibility = "hidden";
  }
  document.getElementById("score").textContent = "Score: " + score;
}

/*
 Deze functie verhoogt de score met 10 punten en werkt vervolgens de weergegeven score bij in een element met id "score".
 */ 
function verhoogScore10() {
  score += 10;
  document.getElementById("score").textContent = "Score: " + score;
}