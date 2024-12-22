const audioHitWarrior = document.createElement("audio");
audioHitWarrior.src = "../audio/hirWarriors.mp3";

const deadSound = document.createElement("audio");
deadSound.src = "../audio/dead.mp3";

const drinkSound = document.createElement("audio");
drinkSound.src = "../audio/drinkPotion.mp3";

const healSound = document.createElement("audio");
healSound.src = "../audio/healSound.mp3";

const loseSound = document.createElement("audio")
loseSound.src = "../audio/lose.mp3"

function audioPlay(audio){
    audio.play()
}


