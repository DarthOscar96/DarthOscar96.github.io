document.getElementById("btn-nav").addEventListener("click", show_nav);
document.getElementById("back-nav").addEventListener("click", hidden_nav);

nav = document.getElementById("nav");
background_nav = document.getElementById("back-nav");

function show_nav(){
    nav.style.right = "-35px";
    background_nav.style.display = "block";
}
function hidden_nav(){
    nav.style.right = "-325px";
    background_nav.style.display = "none";
}
