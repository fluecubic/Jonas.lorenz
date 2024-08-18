let blmchnpfrdchnimg = document.getElementById("blmchnpfrdchnimg");
let psswrtchckrimg = document.getElementById("psswrtchckrimg");
let kalenderimg = document.getElementById("Kalenderimg");
let transmorseimg = document.getElementById("Transmorseimg");

function opensite(url) {
    window.open(url)
}

blmchnpfrdchnimg.addEventListener("click", function() {
    opensite("https://fluecubic.github.io/Bluemchen-Pferdchen_Club/");
});

psswrtchckrimg.addEventListener("click", function() {
    opensite("https://fluecubic.github.io/Passwortchecker/");
});

kalenderimg.addEventListener("click", function() {
     opensite("https://fluecubic.github.io/kalender/");
});
