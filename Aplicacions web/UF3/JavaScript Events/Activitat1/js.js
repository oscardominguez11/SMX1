let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let btn = document.getElementById("bt1");

btn.addEventListener("click", function onClick(){
    input3.style.backgroundColor = input1.value;
})

let btn2 = document.getElementById("bt2");

btn2.addEventListener("click", function onClick(){
    input3.value = parseInt(input1.value) + parseInt(input2.value);
})

let btn3 = document.getElementById("bt3");

btn3.addEventListener("click", function onClick(){
    if (parseInt(input1.value) > parseInt(input2.value)) {
        console.log("A")
        input3.value = input1.value;
    } else {
        console.log("B")
        input3.value = input2.value;
    }
})

let btn4 = document.getElementById("bt4");

btn4.addEventListener("mouseover", function onMouseOver(){
    btn4.disabled = true;
})

let btn5 = document.getElementById("bt5");

btn5.addEventListener("click", function onClick() {
    if (parseInt(input1.value) === parseInt(input2.value)){
        input3.value = "IGUALS";
    } else {
        input3.value = "DIFERENTS";
    }
})

btn5.addEventListener("mouseout", function onMouseOut(){
    input3.value = "";
})
