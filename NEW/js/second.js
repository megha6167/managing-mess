var x = window.matchMedia("(max-width: 800px)");
x.addListener(transformingSellers);
x.addListener(closePanel);
var y = window.matchMedia("(max-width: 425px)");
y.addListener(transformingSellers);
y.addListener(closePanel);
function transformingSellers(){
if(y.matches){

	document.getElementById("list").style.marginLeft = "0%";

	document.getElementById("icons").style.width = "0%";
	var a = document.getElementById("list_of_sellers");

}	
else if(x.matches){

	document.getElementById("list").style.marginLeft = "0%";

	document.getElementById("icons").style.width = "0%";
	var a = document.getElementById("list_of_sellers");
	
}	
	a.setAttribute("onclick", "closePanel()");

}
function closePanel(){
if(x.matches){

	document.getElementById("list").style.marginLeft = "-100%";
	document.getElementById("icons").style.width = "80%";
	var a = document.getElementById("list_of_sellers");
}

else if(x.matches){

	document.getElementById("list").style.marginLeft = "-100%";
	document.getElementById("icons").style.width = "85%";
	var a = document.getElementById("list_of_sellers");
	
}
a.setAttribute("onclick", "transformingSellers()");
	
}
function closeModal(){
	document.getElementById("modal").style.height = "0%";
}
function openModal(){
	document.getElementById("modal").style.height = "100%";
}