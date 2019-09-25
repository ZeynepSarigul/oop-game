class SoundMusic{
  constructor(root,source){
    this.root=root;
    let sound=document.createElement("audio");
    this.sound=sound;
    sound.src=source+""
    root.appendChild(sound)
    
  }
  playMusic(){
    this.sound.play();
    this.sound.loop=true;
  }
  stopMusic(){
    this.sound.loop=false;
    this.sound.pause();
  }
}
