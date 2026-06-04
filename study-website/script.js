// THEME

const btn =
document.getElementById("themeBtn");

if(btn){

btn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(
document.body.classList.contains("light")
){

btn.innerText="☀️";

}else{

btn.innerText="🌙";

}

});

}

// SEARCH

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener(
"keyup",

function(){

let filter =
searchInput.value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(filter)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}
