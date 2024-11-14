let color = ["yellow", "red", "purple", "blue"];
let level = 0;
let start = false;
let h3 = document.querySelector("h3");
let h2 = document.createElement("h2");
h2.classList.add('lilly');
document.body.insertBefore(h2, document.querySelector(".badi"));
let user = [];
let se = [];

document.addEventListener("keypress", function() {
    if (!start) {
        h3.innerText = "Game Start";
        start = true;
        levelup();
    }
});

function levelup() {
    level++;
    h2.innerText = "Level " + level;
    let ren = Math.floor(Math.random() * 4);
    let co = color[ren];
    flash(co);
    seq(co);
}

function flash(color) {
    let btn = document.querySelector("." + color);
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function seq(color) {
    se.push(color);
    console.log(se);
}

document.querySelectorAll(".ba").forEach(function(btn) {
    btn.addEventListener("click", function() {
        let userColor = btn.classList[1];
        user.push(userColor);
        check();
    });
});

function check() {
    let ind = user.length - 1;
    if (user[ind] !== se[ind]) {
        user = [];
        level = 0;
        se = [];
        start = false;
        h3.innerText = "You lost! Press any key to try again";
    } else if (user.length === se.length) {
        user = [];
        setTimeout(levelup, 1000); // Delay next level
    }
}
