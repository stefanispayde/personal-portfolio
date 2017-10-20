// Get the navbar
const navlinks = document.getElementById("navlinks");

// Get the offset position of the navbar
const sticky = navlinks.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navlinks.classList.add("sticky")
  } else {
    navlinks.classList.remove("sticky");
  }
}
myFunction();
