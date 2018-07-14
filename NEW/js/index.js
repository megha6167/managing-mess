
window.onscroll = function() {
                                myFunction()
                             };
var x = window.matchMedia("(max-width: 800px)");
x.addListener(myFunction);

function myFunction()
{	
    var x=0;
    if (x.matches) { // If media query matches
	x=60;
    } else {
        x=90;
 }
    if (document.body.scrollTop > x || document.documentElement.scrollTop > x) 
    {
        document.getElementById("header").className = "header_with_scroll";
     	document.getElementById("logo").className="logo_with_scroll";
	document.getElementById("nav_icon").className = "nav_icon_with_scroll";
    }
    else
    {
    	 document.getElementById("header").className = "header_without_scroll";
    	 document.getElementById("logo").className="logo_without_scroll";
	 document.getElementById("nav_icon").className="nav_icon_without_scroll";
    }
}
function mouseOver() {
    document.getElementById("BC").classList.add("hover1");
}

function mouseOut() {
    document.getElementById("BC").classList.remove("hover1");
}

