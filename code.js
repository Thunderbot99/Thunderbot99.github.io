var category = 0;
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
    document.getElementById("Easy").onclick = () => {category = 0; update_category(category);}
    document.getElementById("Normal").onclick = () => {category = 1; update_category(category);}
    document.getElementById("Hard").onclick = () => {category = 2; update_category(category);}
    for (let i = 0; i < document.getElementsByClassName("MCButton").length; i++) {
        document.getElementsByClassName("MCButton")[i].addEventListener("mouseover", () => {
            document.getElementsByClassName("MCButton")[i].children[0].style.color = "#FFFF55";
            document.getElementsByClassName("MCButton")[i].children[0].style.textShadow = "2px 2px #3F3F15";
        });
        document.getElementsByClassName("MCButton")[i].addEventListener("mouseout", () => {
            document.getElementsByClassName("MCButton")[i].children[0].style.color = "#FFFFFF";
            document.getElementsByClassName("MCButton")[i].children[0].style.textShadow = "2px 2px #3F3F3F";
        });
    }
}

function button(dabutton) {
    if (dabutton.style.backgroundColor == "rgb(255, 85, 85)" || dabutton.style.backgroundColor == "rgb(255, 160, 160)") {
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
    else if (dabutton.style.backgroundColor == "rgb(85, 255, 85)" || dabutton.style.backgroundColor == "rgb(160, 255, 160)") {
        dabutton.style.backgroundColor = "#FFA0A0";
        dabutton.parentElement.style.backgroundColor = "#FFA0A0";
        dabutton.addEventListener("mouseover", () => {
            dabutton.style.backgroundColor = "#FFA0A0";
            dabutton.parentElement.style.backgroundColor = "#FFA0A0";
        });   
        dabutton.addEventListener("mouseout", () => {
            dabutton.style.backgroundColor = "#FF5555";
            dabutton.parentElement.style.backgroundColor = "#FF5555";
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

function update_category(catego) {
    Refresh();
    function change_color(cat, state) {
        if (state == true) {
            document.getElementById(cat).children[0].style.color = "#FFFF55";
            document.getElementById(cat).children[0].style.textShadow = "2px 2px #3F3F15";
            document.getElementById(cat).addEventListener("mouseover", () => {
                document.getElementById(cat).children[0].style.color = "#FFFF55";
                document.getElementById(cat).children[0].style.textShadow = "2px 2px #3F3F15";
            });
            document.getElementById(cat).addEventListener("mouseout", () => {
                document.getElementById(cat).children[0].style.color = "#FFFF55";
                document.getElementById(cat).children[0].style.textShadow = "2px 2px #3F3F15";
            });
        } else {
            document.getElementById(cat).children[0].style.color = "#FFFFFF";
            document.getElementById(cat).children[0].style.textShadow = "2px 2px #3F3F3F";
            document.getElementById(cat).addEventListener("mouseover", () => {
            document.getElementById(cat).children[0].style.color = "#FFFFFF";
            document.getElementById(cat).children[0].style.textShadow = "2px 2px #3F3F3F";
            });
            document.getElementById(cat).addEventListener("mouseout", () => {
            document.getElementById(cat).children[0].style.color = "#FFFFFF";
            document.getElementById(cat).children[0].style.textShadow = "2px 2px #3F3F3F";
            });
        }
    }
    change_color("Easy", false);
    change_color("Normal", false);
    change_color("Hard", false);
    switch(catego) {
        case 0: change_color("Easy", true); break;
        case 1: change_color("Normal", true); break;
        case 2: change_color("Hard", true); break;
    }
}

function Refresh() {    
    var text = [
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""]];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {            
            switch (category) {
                case 0: text[i][j] = data.Easy[(Math.floor(Math.random() * 100)) % 3]; break;
                case 1: text[i][j] = data.Normal[(Math.floor(Math.random() * 100)) % 7]; break;
                case 2: text[i][j] = data.Hard[(Math.floor(Math.random() * 100)) % 15]; break;
                case 3: text[i][j] = data.Insane[(Math.floor(Math.random() * 100)) % 3]; break;

            }
        }
    }
    generate(text);
}

update_category(category);
buttons_init();
