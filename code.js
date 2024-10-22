var category = 0;
x = Math.floor(Math.random() * 10000000).toString()
var SEED = x[0] + x[1] + x[2] + x[3] + x[4];
document.getElementById("Seed").value = SEED;
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
    document.getElementById("Refresh").onclick = () => {
        x = Math.floor(Math.random() * 10000000).toString()
        SEED = x[0] + x[1] + x[2] + x[3] + x[4];
        Refresh(SEED);
    };
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
    document.getElementById("Seed").oninput = () => {
        SEED = document.getElementById("Seed").value;
        Refresh(SEED);
    };
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
    Refresh(SEED);
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

function Refresh(seed) {  
    document.getElementById("Seed").value = seed;
    var text = [
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""]];
    var memdata = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {          
            var index = Math.floor(cyrb128(seed));
            var element;
            if (category == 0) {
                element = memdata.Easy[0]; 
                memdata.Easy[0] = memdata.Easy[index % memdata.Easy.length]; 
                memdata.Easy[index % memdata.Easy.length] = element;
                text[i][j] = memdata.Easy.shift(); 
            } else if (category == 1) {
                element = memdata.Normal[0]; 
                memdata.Normal[0] = memdata.Normal[index % memdata.Normal.length]; 
                memdata.Normal[index % memdata.Normal.length] = element;
                text[i][j] = memdata.Normal.shift(); 
            } else if (category == 2) {
                element = memdata.Hard[0]; 
                memdata.Hard[0] = memdata.Hard[index % memdata.Hard.length]; 
                memdata.Hard[index % memdata.Hard.length] = element;
                text[i][j] = memdata.Hard.shift();                 
            } else if (category == 3) {
                element = memdata.Insane[0]; 
                memdata.Insane[0] = memdata.Insane[index % memdata.Insane.length]; 
                memdata.Insane[index % memdata.Insane.length] = element;
                text[i][j] = memdata.Insane.shift(); 
            }
        }
    }
    generate(text);
}

update_category(category);
buttons_init();
