function openNav() {
  document.getElementById("left-panel").style.left = "0";
  document.getElementById("left-panel").style.overflowX = "visible";
}

function closeNav() {
  document.getElementById("left-panel").style.left = "-450px";
  document.getElementById("left-panel").style.overflowX = "hidden";
}
