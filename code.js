function generate(input) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById("table").children[0].children[0].children[i].children[j].children[0].children[0].innerHTML = input[i][j];
        }
    }
}

function buttons() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById("table").children[0].children[0].children[i].children[j].children[0].onclick = function() {button(document.getElementById("table").children[0].children[0].children[i].children[j].children[0])};
        }
    }
}

function button(dabutton) {
    if (dabutton.style.backgroundColor == "rgb(85, 255, 85)" || dabutton.style.backgroundColor == "rgb(160, 255, 160)") {
        dabutton.style.backgroundColor = "#9E9E9E";  
        dabutton.addEventListener("mouseover", () => {
            dabutton.style.backgroundColor = "#9E9E9E"
        })      
        dabutton.addEventListener("mouseout", () => {
            dabutton.style.backgroundColor = "#8B8B8B"
        })      
    }
    else {
        dabutton.style.backgroundColor = "#A0FFA0";
        dabutton.addEventListener("mouseover", () => {
            dabutton.style.backgroundColor = "#A0FFA0"
        })      
        dabutton.addEventListener("mouseout", () => {
            dabutton.style.backgroundColor = "#55FF55"
        })   
    }
}

var text = [
    ["I love you!","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]];

generate(text);
buttons();
