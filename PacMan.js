/***Generate World***/
var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 3, 1, 0, 1, 2, 1, 0, 1, 2, 1, 2, 1, 0, 1, 2, 1, 0, 1, 3, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 0, 1, 1, 5, 1, 1, 0, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 0, 1, 0, 6, 0, 1, 0, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 2, 0, 0, 1, 7, 8, 9, 1, 0, 0, 2, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 3, 2, 2, 1, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 1, 2, 2, 3, 1],
    [1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1],
    [1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var worldDict = {
    0: "blank",
    1: "wall",
    2: "small-orb",
    3: "big-orb",
    4: "blank", //pacman
    5: "door",
    6: "blank", //blinky
    7: "blank", //clyde
    8: "blank", //inky
    9: "blank", //pinky
    10: "cherry"
};

var ghost = [];
var scaredyGhost = "";

function drawWorld() {
    output = "";
    for (var row = 0; row < world.length; row++) {
        output += "<div class = 'row'>";
        for (var column = 0; column < world[row].length; column++) {
            output += "<div class = '" + worldDict[world[row][column]] + "'></div>";
            if (world[row][column] == 4) {
                pacMan = {
                    x: column,
                    y: row,
                    start: [column, row],
                    lives: 3,
                    css: document.getElementById("pacman").style
                }
                world[row][column] = 0;
            }
            else if (world[row][column] == 6) {
                ghost.push({
                    name: "blinky",
                    x: column,
                    y: row,
                    start: [column, row],
                    state: 0, //0 = ghost, 1 = scaredy
                    active: 0 //0 = inside door, 1 = outside door
                })
                world[row][column] = 0;
                worldDict[6] = "blinky";
            }
            else if (world[row][column] == 7) {
                ghost.push({
                    name: "clyde",
                    x: column,
                    y: row,
                    start: [column, row],
                    state: 0,
                    active: 0
                })
                world[row][column] = 0;
                worldDict[7] = "clyde";
            }
            else if (world[row][column] == 8) {
                ghost.push({
                    name: "inky",
                    x: column,
                    y: row,
                    start: [column, row],
                    state: 0,
                    active: 0
                })
                world[row][column] = 0;
                worldDict[8] = "inky";
            }
            else if (world[row][column] == 9) {
                ghost.push({
                    name: "pinky",
                    x: column,
                    y: row,
                    start: [column, row],
                    state: 0,
                    active: 0
                })
                world[row][column] = 0;
                worldDict[9] = "pinky";
            }
            else if (world[row][column] == 5) {
                door = {
                    x: column,
                    y: row
                }
            }
        }
        output += "</div>";
    }
    document.getElementById("world").innerHTML = output;

    pacManPos();
    ghostPos();
}

/***Character Positions***/
//PacMan
function pacManPos() {
    pacMan.css.top = pacMan.y * 20 + "px";
    pacMan.css.left = pacMan.x * 20 + "px";
}

//Ghost
function ghostPos() {
    for (var x = 0; x <= 3; x++) {
        var temp = worldDict[x + 6];
        document.getElementById(temp).style.top = ghost[x].y * 20 + "px";
        document.getElementById(temp).style.left = ghost[x].x * 20 + "px";
    }
}

/***Character Movement***/
//PacMan
document.onkeydown = function (e) {
    if (pacMan.lives > 0) {
        //left movement
        if (e.keyCode == 37
            && world[pacMan.y][pacMan.x - 1] != 1
            && world[pacMan.y][pacMan.x - 1] != 5) {
            pacMan.x--;
            if (pacMan.x < 0) {
                pacMan.x = world[0].length - 1;
            }
            pacMan.css.backgroundImage = "url('img/PacMan_Left.gif')"
        }
        //up movement
        else if (e.keyCode == 38) {
            //past world
            if (pacMan.y == 0) {
                pacMan.y = world.length - 1;
                pacMan.css.backgroundImage = "url('img/PacMan_Up.gif')"
            }
            //regular
            else if (world[pacMan.y - 1][pacMan.x] != 1 && world[pacMan.y - 1][pacMan.x] != 5) {
                pacMan.y--;
                pacMan.css.backgroundImage = "url('img/PacMan_Up.gif')"
            }
        }
        //right movement
        else if (e.keyCode == 39
            && world[pacMan.y][pacMan.x + 1] != 1
            && world[pacMan.y][pacMan.x + 1] != 5) {
            pacMan.x++;
            if (pacMan.x > world[0].length - 1) {
                pacMan.x = 0;
            }
            pacMan.css.backgroundImage = "url('img/PacMan_Right.gif')"
        }
        //down movement
        else if (e.keyCode == 40) {
            if (pacMan.y == world.length - 1) {
                pacMan.y = 0;
                pacMan.css.backgroundImage = "url('img/PacMan_Down.gif')"
            }
            else if (world[pacMan.y + 1][pacMan.x] != 1 && world[pacMan.y + 1][pacMan.x] != 5) {
                pacMan.y++;
                pacMan.css.backgroundImage = "url('img/PacMan_Down.gif')"
            }
        }
    }
    //small orb
    if (world[pacMan.y][pacMan.x] == 2)
    {
        pointValue += 10;
    }
    //big orb
    else if (world[pacMan.y][pacMan.x] == 3)
    {
        pointValue += 25;
        for (var x = 0; x <= 3; x++) {
            var temp = worldDict[x + 6];
            ghost[x].state = 1;
            document.getElementById(temp).style.backgroundImage = "url('img/Scaredy.gif')";
        }
        clearTimeout(scaredyGhost);
        scaredyGhost = setTimeout(revertGhosts, 10000);
    }
    //cherry
    else if (world[pacMan.y][pacMan.x] == 10)
    {
        pointValue += 50;
    }
    world[pacMan.y][pacMan.x] = 0;
    drawWorld();
    pacManPos();
    updatePanel();
}

//Ghost
function ghostMov() {
    for (var x = 0; x < 4; x++) {
        movComp = 0;
        var numberPool = [];

        //if ghost in starting box
        if (ghost[x].active == 0) {
            movComp = 1;
        }

        //if movement has not occurred
        while (movComp == 0) {
            //insert up movement
            if (world[ghost[x].y][ghost[x].x - 1] != 1 && world[ghost[x].y][ghost[x].x - 1] != 5) {
                numberPool.push(0);
            }
            //insert left movement
            if (world[ghost[x].y - 1][ghost[x].x] != 1 && world[ghost[x].y - 1][ghost[x].x] != 5) {
                numberPool.push(1);
            }
            //insert right movement
            if (world[ghost[x].y][ghost[x].x + 1] != 1 && world[ghost[x].y][ghost[x].x + 1] != 5) {
                numberPool.push(2);
            }
            //insert down movement
            if (world[ghost[x].y + 1][ghost[x].x] != 1 && world[ghost[x].y + 1][ghost[x].x] != 5) {
                numberPool.push(3);
            }
            //define possible movement
            var currentMov = numberPool[getRndInteger(0, numberPool.length - 1)];
            //left movement
            if (currentMov == 0) {
                ghost[x].x--;
                movComp = 1;
                if (ghost[x].x < 0) {
                    ghost[x].x = world[0].length - 1;
                }
            }
            //up movement
            else if (currentMov == 1) {
                //past world
                if (ghost[x].y == 0) {
                    ghost[x].y = world.length - 1;
                }
                //regular
                else {
                    ghost[x].y--;
                    movComp = 1;
                }
            }
            //right movement
            else if (currentMov == 2) {
                ghost[x].x++;
                movComp = 1;
                if (ghost[x].x > world[0].length - 1) {
                    ghost[x].x = 0;
                }
            }
            //down movement
            else if (currentMov == 3) {
                //past world
                if (ghost[x].y == world.length - 1) {
                    ghost[x].y = 0;
                }
                //regular
                else {
                    ghost[x].y++;
                    movComp = 1;
                }
            }
        }
    }
    ghostPos();
    if (pacMan.lives > 0) {
        setTimeout(ghostMov, 500);
    }
}

/***Ghost Mechanics***/
//release ghost
function ghostRelease() {
    for (var x = 0; x <= 3; x++) {
        if (ghost[x].active == 0) {
            ghost[x].y = (door.y - 1);
            ghost[x].x = door.x
            ghost[x].active = 1;
            break;
        }
    }
    if (pacMan.lives > 0) {
        setTimeout(ghostRelease, 5000);
    }
}

//ghost collision
function ghostCollision() {
    for (var x = 0; x <= 3; x++) {
        if (pacMan.y == ghost[x].y
            && pacMan.x == ghost[x].x) {
            if (ghost[x].state == 0) {
                pacMan.lives--;
                pacMan.y = pacMan.start[1];
                pacMan.x = pacMan.start[0];

                for (var y = 0; y <= 3; y++) {
                    ghost[y].x = ghost[y].start[0];
                    ghost[y].y = ghost[y].start[1];
                    ghost[y].active = 0;
                }

            }
            else if (ghost[x].state == 1) {
                ghost[x].x = ghost[x].start[0];
                ghost[x].y = ghost[x].start[1];
                ghost[x].active = 0;
                var temp = worldDict[x + 6];
                ghost[x].state = 0;
                document.getElementById(temp).style.backgroundImage = "url('img/" + temp + ".gif')";
                pointValue += 100;
            }
        }
    }
}

//revert ghosts from scaredy
function revertGhosts() {
    for (var x = 0; x <= 3; x++) {
        var temp = worldDict[x + 6];
        ghost[x].state = 0;
        document.getElementById(temp).style.backgroundImage = "url('img/" + temp + ".gif')";
    }
}

/***Scoreboard***/
//Display
document.getElementById("panel").style.width = world[0].length * 20 + "px";
pointValue = 0;
function updatePanel() {
    document.getElementById("score").innerHTML = "<p>Score: " + pointValue + "</p>";
    document.getElementById("lives").innerHTML = "<p>Lives: " + pacMan.lives + "</p>";
    if (pacMan.lives == 0) {
        document.getElementById("lives").innerHTML = "<p>GAME OVER</p>";
    }
}

//Cherry
function makeCherry() {
    world[15][10] = 10;
    drawWorld();
}

/***Gameloop***/
function gameLoop() {
    updatePanel();

    ghostPos();
    ghostCollision();

    pacManPos();

    if (pacMan.lives > 0) {
        setTimeout(gameLoop, 25);
    }
}

//random number generator
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***Start of Game***/
drawWorld();
gameLoop();
setTimeout(ghostRelease, 5000);
ghostMov();
setTimeout(makeCherry, 60000);