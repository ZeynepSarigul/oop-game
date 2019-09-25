// let nextEnemySpot = enemies => {
//     let enemySpots = GAME_WIDTH / ENEMY_WIDTH;
//     let spotsTaken = [false,false, false, false, false]

//     // This function will be called once for each enemy 
//     //in the game and each time the function is called, 
//     //`enemy` will refer to a different instance of the `Enemy` class.
//     // spot will be a number value, we will be able to reach spotsTaken[1] etc
//     enemies.forEach(enemy => {
//         spotsTaken[enemy.spot] = true
    
//     })
//     // candidate represents a potential spot 
//     let candidate = undefined
//      while(candidate = undefined || spotsTaken[candidate]) {
//          candidate = Math.floor(Math.random() * enemySpots)
//      }
//      return candidate
//     }
// // add the starry background an whitebox
//      let addBackground = root => {
//          let bg = document.createElement('img')
//          bg.src= "images/medieval.jpg"
//          bg.style.height = GAME_HEIGHT + "px"
//          bg.style.width= GAME_WIDTH + "px"
//          root.appendChild(bg)
//          let whitebox = document.createElement('div')
//          whitebox.style.position = "absolute"
//          whitebox.style.zIndex= 100
//          whitebox.style.top = GAME_HEIGHT + "px"
//          // TO MAKE SURE it will be able to hide enemy at any point
//          whitebox.style.height = ENEMY_HEIGHT + "px"
//          whitebox.style.width =  GAME_WIDTH + "px"
//          whitebox.style.background= "#fff"
//          root.appendChild(whitebox)
//      }

let nextEnemySpot = enemies => { 
            let enemySpots = GAME_WIDTH / ENEMY_WIDTH 
           let spotsTaken = [false, false, false, false, false] 
            enemies.forEach(enemy => { 
                    spotsTaken[enemy.spot] = true 
            }) 
            let candidate = undefined 
            while (candidate === undefined || spotsTaken[candidate]) {                
                   candidate = Math.floor(Math.random() * enemySpots) 
           } 
           return candidate 
   } 

   let nextFriendSpot = friends => { 
        let friendSpots = GAME_WIDTH / ENEMY_WIDTH 
       let spotsTaken = [false, false, false, false, false] 
        friends.forEach(friend => { 
                spotsTaken[friend.spot] = true 
        }) 
        let candidate = undefined 
        while (candidate === undefined || spotsTaken[candidate]) {                
               candidate = Math.floor(Math.random() * friendSpots) 
       } 
       return candidate 
} 
   let addBackground = root => {        
           let bg = document.createElement("img") 
           bg.src = "images/illust.gif"
        bg.style.position = "relative"
  
        
           bg.style.height = GAME_HEIGHT + "px" 
           bg.style.width =  GAME_WIDTH + "px"
          
 


           root.append(bg) 
           let whiteBox = document.createElement("div") 
           whiteBox.style.zIndex = "100" 
           whiteBox.style.position = "absolute" 
           whiteBox.style.top = GAME_HEIGHT + "px" 
           whiteBox.style.height = ENEMY_HEIGHT + "px" 
          whiteBox.style.width = GAME_WIDTH + "px" 
          whiteBox.style.background = "#fff" 
        root.append(whiteBox) 
   } 
