let blmchnpfrdchnimg = document.getElementById("blmchnpfrdchnimg");
let psswrtchckrimg = document.getElementById("psswrtchckrimg");
let Kalenderimg = document.getElementById("Kalenderimg");


function opensite(url) {
    window.open(url)
}

blmchnpfrdchnimg.addEventListener("onclick",function() {
    opensite("https://fluecubic.github.io/Bluemchen-Pferdchen_Club/");
})  
psswrtchckrimg.addEventListener("onclick",function() {
    opensite("https://fluecubic.github.io/Passwortchecker/");
})  
Kalenderimg.addEventListener("onclick",function() {
    opensite("https://fluecubic.github.io/kalender/");
})  

