import { dirs } from "./dirs.js"
import { healWarrior } from "./HealWarrior.js"
import { playAudio } from "./playAudio.js"
import { soundDringPotion } from "./audioM.js"
import { soundHeal } from "./audioM.js"

 function keyHeal(){
    document.addEventListener("keydown", (e)=>{
        if(e.code === "KeyE" && dirs.buffContainer.children.length !== 0 ){
            dirs.buffContainer.querySelector(".buff").remove()
            healWarrior()
            playAudio(soundDringPotion)
            playAudio(soundHeal)
        }
    })
}
keyHeal()
