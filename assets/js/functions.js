/* OPEN OR CLOSE THE MENU */
function openNav() {
  document.getElementById("left-panel").style.left = "0";
  document.getElementById("left-panel").style.overflowX = "visible";
  document.getElementById("top-navigation").style.opacity = "0";
}

function closeNav() {
  document.getElementById("left-panel").style.left = "-450px";
  document.getElementById("left-panel").style.overflowX = "hidden";
  document.getElementById("top-navigation").style.opacity = "1";
}


/* DETECT WINDOW RESIZING WHEN TEST THE RESPONSIVENESS ;) */
window.addEventListener('resize', windowSize);

function windowSize() {
  if(window.innerWidth >= 992){
	  openNav();
  } else {
	  closeNav();
  }
}
