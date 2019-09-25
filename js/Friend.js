class Friend {
    update(timeDiff) {
      this.y = this.y + timeDiff * this.speed;
      this.domElement.style.top = this.y + "px";
      if (this.y > GAME_HEIGHT) {
        this.root.removeChild(this.domElement);
        this.destroyed = true;
      }
    }
    killTheChildren = () => {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    };
    increaseSpeed = () => {
      // console.log("speed", this.speed);
      this.speed -= 0.01;
      // console.log("speed after update", this.speed);
    };
    constructor(theRoot, friendSpot) {
      this.root = theRoot;
      this.spot = friendSpot;
      this.x = friendSpot * FRIEND_WIDTH;
      this.y = -FRIEND_HEIGHT;
      this.destroyed = false;
      this.domElement = document.createElement("img");
      this.domElement.src = "images/heart2.png";
      this.domElement.style.position = "absolute";
      this.domElement.style.left = this.x + "px";
      this.domElement.style.top = this.y + "px";
      this.domElement.style.zIndex = 5;
      theRoot.appendChild(this.domElement);
      setInterval(this.increaseSpeed, 2000);
      this.speed = Math.random() / 2 + 0.1;
      console.log("speed", this.speed);
    }
  }