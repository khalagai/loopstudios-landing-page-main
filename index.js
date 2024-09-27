
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("menu").style.zIndex = 2;
    document.getElementById("ham-nav").style.zIndex = -1;
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("menu").style.zIndex = -1;
  }