//mobile nav
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var mySidenav = document.getElementById("mySidenav");
var mySidenav = document.getElementById("sideNavToggle");

sideNavToggle.addEventListener("click", function () {
    if (mySidenav.clientWidth == window.clientWidth) {
        closeNav();
    } else {
        openNav();
    }
});

//donate button
var btn = document.getElementById("donateBtn");
var thankBox = document.getElementById("Message")

donateBtn.addEventListener("click", function () {
    thankBox.style.display = "block";
});

$(document).ready(function () {
    // CLICK, CAPTION DROPS
    $("#honey")
        .click(function () {
            $("#text").slideToggle("slow");
        });
});