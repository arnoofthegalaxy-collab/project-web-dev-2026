var speler = "";

function startspel(){
  speler = document.getElementById("naam");
  if (speler.value.trim() === "") {
    alert("Voer je naam in!");
    return;
  }
  var naam = speler.value.trim();
  alert("Welkom, " + naam + "! Klik op OK om te beginnen.");
  window.location.href = "gamep2.html";
}