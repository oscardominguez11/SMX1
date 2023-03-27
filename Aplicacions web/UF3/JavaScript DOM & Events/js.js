/* WORK IN PROGRESS ... */

let opcions = document.getElementsByTagName("option");
let divs = document.getElementsByTagName("div");
console.log(opcions)
let select = document.getElementById("select");
let opcio0 = document.getElementById("op0");
let opcio1 = document.getElementById("op1");
let opcio2 = document.getElementById("op2");
let opcio3 = document.getElementById("op3");
let opcio4 = document.getElementById("op4");
let opcio11 = document.getElementById("opcio1");
let opcio12 = document.getElementById("opcio2");
let opcio13 = document.getElementById("opcio3");
let opcio14 = document.getElementById("opcio4");

select.addEventListener("click", (e) => {

    opcio11.style.display = "none";
    opcio12.style.display = "none";
    opcio13.style.display = "none";
    opcio14.style.display = "none";

    for (let i = 0; i < divs.length; i++) {
        if(select.options[select.selectedIndex].value === opcions[i + 1].value){
            divs[i].style.display = "block"
        }
    }
})
