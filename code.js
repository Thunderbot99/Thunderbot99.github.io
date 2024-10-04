function generate(input) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById("table").children[0].children[0].children[i].children[j].children[0].children[0].innerHTML = input[i][j];
        }
    }
}

function buttons_init() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            var dabutton = document.getElementById("table").children[0].children[0].children[i].children[j].children[0];
            dabutton.onclick = function() {button(document.getElementById("table").children[0].children[0].children[i].children[j].children[0])};
            document.getElementById("table").children[0].children[0].children[i].children[j].children[0].addEventListener("mouseover", () => {
                document.getElementById("table").children[0].children[0].children[i].children[j].children[0].style.backgroundColor = "#9E9E9E";
                document.getElementById("table").children[0].children[0].children[i].children[j].style.backgroundColor = "#9E9E9E";
            });
            document.getElementById("table").children[0].children[0].children[i].children[j].children[0].addEventListener("mouseout", () => {
                document.getElementById("table").children[0].children[0].children[i].children[j].children[0].style.backgroundColor = "#8B8B8B";
                document.getElementById("table").children[0].children[0].children[i].children[j].style.backgroundColor = "#8B8B8B";
            });
        }
    }
    document.getElementById("Refresh").onclick = Refresh;
    document.getElementById("Refresh").addEventListener("mouseover", () => {
        document.getElementById("Refresh.text").style.color = "#FFFF55";
        document.getElementById("Refresh.text").style.textShadow = "2px 2px #3F3F15";
    });
    document.getElementById("Refresh").addEventListener("mouseout", () => {
        document.getElementById("Refresh.text").style.color = "#FFFFFF";
        document.getElementById("Refresh.text").style.textShadow = "2px 2px #3F3F3F";
    });
}

function button(dabutton) {
    if (dabutton.style.backgroundColor == "rgb(85, 255, 85)" || dabutton.style.backgroundColor == "rgb(160, 255, 160)") {
        dabutton.style.backgroundColor = "#9E9E9E";
        dabutton.parentElement.style.backgroundColor = "#9E9E9E";
        dabutton.addEventListener("mouseover", () => {
            dabutton.style.backgroundColor = "#9E9E9E";
            dabutton.parentElement.style.backgroundColor = "#9E9E9E";
        });   
        dabutton.addEventListener("mouseout", () => {
            dabutton.style.backgroundColor = "#8B8B8B";
            dabutton.parentElement.style.backgroundColor = "#8B8B8B";
        }); 
    }
    else {
        dabutton.style.backgroundColor = "#A0FFA0";
        dabutton.parentElement.style.backgroundColor = "#A0FFA0";
        dabutton.addEventListener("mouseover", () => {
            dabutton.style.backgroundColor = "#A0FFA0";
            dabutton.parentElement.style.backgroundColor = "#A0FFA0";
        });
        dabutton.addEventListener("mouseout", () => {
            dabutton.style.backgroundColor = "#55FF55";
            dabutton.parentElement.style.backgroundColor = "#55FF55";
        });
    }
}

function Refresh() {    
    var text = [
        ["I love","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""]];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {            
            switch (2) {
                case 0: text[i][j] = data.Easy[(Math.floor(Math.random() * 100)) % 3]; break;
                case 1: text[i][j] = data.Normal[(Math.floor(Math.random() * 100)) % 7]; break;
                case 2: text[i][j] = data.Hard[(Math.floor(Math.random() * 100)) % 15]; break;
                case 3: text[i][j] = data.Insane[(Math.floor(Math.random() * 100)) % 3]; break;

            }
        }
    }
    generate(text);
}

Refresh();
buttons_init();
