
// CREATE DATA RELATED TO GAME CANVAS THAT WILL BE USED IN OTHER FILES
let GAME_HEIGHT = 510
let GAME_WIDTH = 600
let ENEMY_WIDTH = 75
let ENEMY_HEIGHT = 90
let PLAYER_HEIGHT = 54
let PLAYER_WIDTH = 75
let MAX_ENEMIES = 1
let score = 0
let FRIEND_WIDTH = 75;
let FRIEND_HEIGHT = 75;
let MAX_FRIEND = 1;


function MaxiEnemy() {
  if(MAX_ENEMIES >= 5) {
      MAX_ENEMIES =1
  }
  MAX_ENEMIES += 1
}

setInterval(MaxiEnemy, 10000)