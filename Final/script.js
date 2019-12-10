function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var mySidenav = document.getElementById("mySidenav");
var mySidenav = document.getElementById("sideNavToggle");

sideNavToggle.addEventListener("click", function(){
    if(mySidenav.clientWidth == window.clientWidth){
        closeNav();
    }

    else {
    openNav();        
    }
});

var btn = document.getElementById("donateBtn");
var thankBox = document.getElementById("thankBox")

donateBtn.addEventListener("click", function(){
    thankBox.style.display = "block";
});

