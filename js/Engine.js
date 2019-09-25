// it contains all the logic of the game and interactions between player and enemy
class Engine {
  gameLoop = () => {
    this.info.update(score);
    if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    // Enemy update
    this.enemies.forEach(enemy => {
      enemy.update(timeDiff);
    });
    this.enemies = this.enemies.filter(enemy => {
      return !enemy.destroyed;
    });
    while (this.enemies.length < MAX_ENEMIES) {
      let spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }
    // Friend update-----------------------------------
    this.friends.forEach(friend => {
      friend.update(timeDiff);
    });
    this.friends = this.friends.filter(friend => {
      return !friend.destroyed;
    });
    while (this.friends.length < MAX_FRIEND) {
      let spot = nextFriendSpot(this.friends);
      this.friends.push(new Friend(this.root, spot));
    }
    // -------------------------------------------------
    if (this.isPlayerDead()) {
      window.alert("Game over");
      return;
    }
    if (this.FriendBoost()) {
      score += 1000;
    }
    setTimeout(this.gameLoop, 2);
  };
  isPlayerDead = () => {
     for(let i= 0; i<this.enemies.length; i++) {
     
if(this.enemies[i].y + ENEMY_HEIGHT > this.player.y && this.enemies[i].x === this.player.x )
{
 score =0
 this.music.stopMusic();
  return true

} else { 
  score++
return false}
} }
       
      
   
   
  FriendBoost = () => {
    this.friends.forEach(friend => {
      console.log(friend.x, friend.y, this.player.x, this.player.y);
      let sameColumn = (this.player.x == friend.x) == true;
      let friendbottom =
        friend.y + FRIEND_HEIGHT < this.player.y + PLAYER_HEIGHT == true;
      let playerTop = this.player.y < friend.y + FRIEND_HEIGHT == true;
      if (sameColumn && friendbottom && playerTop == true) {
        friend.killTheChildren();
        score += 500;

        console.log("score", score);
      }
    });
  };
  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    this.enemies = [];
    this.friends = [];
    this.info = new Text(this.root, 60, 40);
    addBackground(this.root);
    //Start background music
    this.music=new SoundMusic(this.root,"music/Yangtze.mp3");
    this.music.playMusic();
    this.music.volume=.9
  }
}

// class Engine { 
      
//   constructor(theRoot) { 
//     this.root = theRoot 
//     this.player = new Player(this.root) 
//     this.enemies = [] 
//     this.info = new Text(this.root, 45, 40)
//     this.friends = []
    
   
//     addBackground(this.root) 

//   } 


//   FriendBoost = () => {
//     this.friends.forEach(friend => {
//       console.log(friend.x, friend.y, this.player.x, this.player.y);
//       let sameColumn = (this.player.x == friend.x) == true;
//       let friendbottom =
//         friend.y + FRIEND_HEIGHT < this.player.y + PLAYER_HEIGHT == true;
//       let playerTop = this.player.y < friend.y + FRIEND_HEIGHT == true;
//       if (sameColumn && friendbottom && playerTop == true) {
//         friend.killTheChildren();
//         score += 100;

//         console.log("score", score);
//       }
//     });
//   };

//   isPlayerDead = () => { 

//     for(let i= 0; i<this.enemies.length; i++) {
     
// if(this.enemies[i].y + 140 > this.player.y && this.enemies[i].x === this.player.x )
// {
//  score =0
//   return true

// } else { 
//   score++
// return false}
// } }


//      gameLoop = () => { 
//       this.info.update(score)
//    if (this.lastFrame === undefined) this.lastFrame = (new Date).getTime() 
//        let timeDiff = (new Date).getTime() - this.lastFrame 
//      this.lastFrame = (new Date).getTime() 
     
//     //  this.score += timeDiff
     
//         this.enemies.forEach(enemy => { 
//           enemy.update(timeDiff) 
//         }) 
//         this.enemies = this.enemies.filter(enemy => { 
//          return !enemy.destroyed 
//        }) 
//        while (this.enemies.length < MAX_ENEMIES) { 
//          let spot = nextEnemySpot(this.enemies) 
//          this.enemies.push(new Enemy(this.root, spot)) 
//        }
       
//        this.friends.forEach(friend => {
//         friend.update(timeDiff);
//       });
//       this.friends = this.friends.filter(friend => {
//         return !friend.destroyed;
//       });
//       while (this.friends.length < MAX_FRIEND) {
//         let spot = nextFriendSpot(this.friends);
//         this.friends.push(new Friend(this.root, spot));
//       }
//        if (this.isPlayerDead()) { 
//          window.alert("Game over") 
//          return 
//        } 
//        if (this.FriendBoost()) {
//         score += 1000;
//       }

//        setTimeout(this.gameLoop, 20) 
//      } 
  
        
     
  
//    } 