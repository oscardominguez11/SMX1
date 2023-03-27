let boto = document.getElementById("formulari");

boto.addEventListener("submit", function (event){
    event.preventDefault();
}) 

let fname = document.getElementById("primer");
let lname = document.getElementById("segon");

document.getElementById("fname").addEventListener("keyup", myFunction);

function myFunction(){
    let campo = document.getElementById("fname");
    if (campo.value == "") {
        campo.style.backgroundColor = "red";
    }   else {
        campo.style.backgroundColor = "";
    } 
}



document.getElementById("formulari").addEventListener("submit", myFunctionn);

function myFunctionn(){
    let firstname = document.getElementById("fname").value;
    let secondname = document.getElementById("lname").value;
    let posarcontingut = document.getElementById("contingut");
    let suma = firstname +"<br>" + secondname;
    posarcontingut.innerHTML = suma
}

