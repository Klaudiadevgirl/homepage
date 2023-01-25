console.log("Cześć!");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let backgroundName = document.querySelector(".backgroundName");
button.addEventListener("click", () => {
    body.classList.toggle("body--withoutImage");

    backgroundName.innerText = body.classList.contains("body--withoutImage") ? "Włącz tło" : "Wyłącz tło";

});