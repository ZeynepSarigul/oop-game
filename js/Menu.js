class Menu{
    constructor() {
        this.root = document.querySelector("body")
        let mainImage = document.createElement("img")
        mainImage.style.position= "absolute"
        mainImage.style.left= "30%"
        mainImage.src ="images/skyy.gif"
        mainImage.style.width= GAME_WIDTH + "px"
        this.root.appendChild(mainImage)
        this.mainImage = mainImage
        this.startButton = document.createElement('button')
        this.startButton.style.position = "absolute"
        this.startButton.style.top ="60%"
        this.startButton.style.left ="50%"
        this.startButton.style.fontSize = "20px"
        this.startButton.innerText ="Start"
        this.startButton.style.fontFamily ="arial"
        this.startButton.style.color ="pink"

        this.root.appendChild(this.startButton)
        this.startGame = this.startGame.bind(this)
        this.startButton.addEventListener("click", this.startGame )
    }
startGame() {
   
this.root.removeChild(this.mainImage);
this.root.removeChild(this.startButton);
let gameEngine = new Engine(document.getElementById("app"))

let keyDownHandler = event => {
    if(event.code ==="ArrowUp") {
        gameEngine.player.moveUp()
    }
    if(event.code ==="ArrowDown") {
        gameEngine.player.moveDown()
    }
    if(event.code ==="ArrowRight") {
        gameEngine.player.moveRight()
    }
    if(event.code ==="ArrowLeft") {
        gameEngine.player.moveLeft()
    }
    if(event.code ==="KeyQ") {
        gameEngine.player.moveLeftUp()
    }

    if(event.code === "KeyA") {
        gameEngine.player.moveRightDown()
    }

    if(event.code === "KeyW") {
        gameEngine.player.moveRightUp()
    }

    if(event.code === "KeyS") {
        gameEngine.player.moveLeftDown()
    }
   
}

document.addEventListener("keydown",keyDownHandler)
gameEngine.gameLoop()
    

}}