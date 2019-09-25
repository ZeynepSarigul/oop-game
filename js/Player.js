class Player {
    constructor(root) {
    this.x = PLAYER_WIDTH * 2
    this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10
    this.domElement = document.createElement('img')
    this.domElement.src = "images/boy5.png"
    this.domElement.style.position = "absolute"
    this.domElement.style.left = this.x + "px"
    this.domElement.style.top = this.y + "px"
    this.domElement.style.zIndex= "10"
    this.domElement.style.backgroundSize = "contain"
    root.appendChild(this.domElement) }

moveUp() {
    if(this.y > 0) {
        this.y = this.y - PLAYER_HEIGHT + 10
    }
    this.domElement.style.top = this.y + "px"
}

moveDown() {
    if(this.y < GAME_HEIGHT - PLAYER_HEIGHT) {
        this.y = this.y + PLAYER_HEIGHT -10 
    }
    this.domElement.style.top = this.y + "px"
}

moveLeftUp() {
    if(this.y> 0 && this.x >0){
    this.y = this.y - PLAYER_HEIGHT + 10
    this.x = this.x - PLAYER_WIDTH
    }
    this.domElement.style.top = this.y + "px"
    this.domElement.style.left = this.x + "px"
}

moveRightDown() {
     if(this.y < GAME_HEIGHT - PLAYER_HEIGHT && this.x + PLAYER_WIDTH < GAME_WIDTH){
    this.y = this.y + PLAYER_HEIGHT -10 
    this.x= this.x + PLAYER_WIDTH
    }
    this.domElement.style.top = this.y + "px"
    this.domElement.style.left = this.x + "px"
}

moveRightUp() {
    if( this.y> 0 && this.x + PLAYER_WIDTH < GAME_WIDTH){
        this.y = this.y - PLAYER_HEIGHT + 10
   this.x= this.x + PLAYER_WIDTH
   }
   this.domElement.style.top = this.y + "px"
   this.domElement.style.left = this.x + "px"
}
moveLeftDown() {
    if(this.y < GAME_HEIGHT - PLAYER_HEIGHT && this.x > 0){
        this.y = this.y + PLAYER_HEIGHT -10 
        this.x = this.x - PLAYER_WIDTH
        }
        this.domElement.style.top = this.y + "px"
        this.domElement.style.left = this.x + "px"
    }


moveLeft(){
if(this.x > 0) {
    this.x = this.x - PLAYER_WIDTH
}
this.domElement.style.left = this.x + "px"
    }

moveRight() {
    if(this.x + PLAYER_WIDTH < GAME_WIDTH) {
        this.x= this.x + PLAYER_WIDTH
    }
    this.domElement.style.left = this.x + "px"
}

}