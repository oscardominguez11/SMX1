let input = document.querySelector("input");

input.addEventListener("change", function onChange(){
    console.log(input.value);
})

input.addEventListener("mouseout", function onMouseOut(){
    console.log("Abandonat");
})

input.addEventListener("keydown", function onKeySown(){
    console.log(input.value);
})

input.addEventListener("submit", function Onsubmit(){
    input.value === "fora";
})