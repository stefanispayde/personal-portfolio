var jump=function(e)
{
       //prevent the "normal" behaviour which would be a "hard" jump
       e.preventDefault();
       //Get the target
       var target = $(this).attr("href");
       //perform animated scrolling
       $('html,body').animate(
       {
               //get top-position of target-element and set it as scroll target
               scrollTop: $(target).offset().top
       //scrolldelay: 2 seconds
     },900,function()
       {
               //attach the hash (#jumptarget) to the pageurl
               location.hash = target;
       });

}
$(document).ready(function()
{
       $('a[href*=#]').bind("click", jump);
       return false;

});

const navlinks = document.getElementById("navlinks");

const sticky = navlinks.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navlinks.classList.add("sticky")
  } else {
    navlinks.classList.remove("sticky");
  }
}
