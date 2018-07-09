
window.onscroll = function() {
                                myFunction()
                             };

function myFunction()
{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
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