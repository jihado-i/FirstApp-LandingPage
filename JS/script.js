

let listIcon = document.getElementById("listIcon");
let listUl   = document.getElementById("listUl");
var listDiv  = document.getElementById("listDiv");

listIcon.addEventListener("mouseover",showList)
listDiv.addEventListener("mouseleave",hideList)
function showList(){
    listUl.style.display = "block";
    listUl.style.visibility = "visible";
    listUl.style.opacity = 1 ;
}
function hideList(){
    listUl.style.display = "none";
}

