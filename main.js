canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
roverx = 100
rovery = 100
rover = "rover.png"
mars_array = ["Mars1.jpeg", "Mars2.jpeg", "Mars3.jpeg","Mars4.jpeg", "mars.jpg"]
x = Math.floor(Math.random()*5)
console.log(x)
background = mars_array[x]
function add () {
    bg = new Image()
    bg.src = background
    bg.onload = uploadBackground

    rvrimg = new Image()
    rvrimg.src = rover
    rvrimg.onload = uploadrvr
}
function uploadBackground () {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
}

function uploadrvr () {
    ctx.drawImage(rvrimg, roverx, rovery, 100, 100)
}
window.addEventListener("keydown", kd)

function kd (e) {
    x = e.keyCode
    console.log(x)

    if (x == 37) {
        left()
    }
    if (x == 38) {
        up()
    }
    if (x == 39) {
        right()
    }
    if (x == 40) {
        down()
    }
}
function right () {
    if (roverx <= 700) {
        roverx = roverx + 10
        uploadBackground()
        uploadrvr()
    }
}

function left () {
    if (roverx >= 0) {
        roverx = roverx - 10
        uploadBackground()
        uploadrvr()
    }
}

function up () {
    if (rovery >= 0) {
        rovery = rovery - 10
        uploadBackground()
        uploadrvr()
    }
}

function down () {
    if (rovery <= 500) {
       rovery = rovery + 10
       uploadBackground()
       uploadrvr() 
    }
}