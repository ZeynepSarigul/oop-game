class Enemy {
    update(timeDiff) {
        this.y= this.y + timeDiff * this.speed
        this.domElement.style.top = this.y + "px"

        if(this.y> GAME_HEIGHT) {
            this.root.removeChild(this.domElement)
            this.destroyed = true
        }


    }

    increaseSpeed() {
    this.speed -= 0.01
    }


    constructor(theRoot, enemySpot) {
       
        this.root = theRoot
        this.spot = enemySpot
        this.x = enemySpot * ENEMY_WIDTH
        this.y = -ENEMY_HEIGHT
        this.destroyed= false
        this.domElement = document.createElement('img')
        this.domElement.src= "images/fier.png" 
        this.domElement.style.position= "absolute"
        this.domElement.style.top = this.y + "px"
        this.domElement.style.left = this.x + "px"
        this.domElement.style.zIndex = 5
        theRoot.appendChild(this.domElement)
        this.speed = Math.random() / 2 + 0.25
        setInterval(this.increaseSpeed, 15000);
    }

}