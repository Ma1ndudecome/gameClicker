import { dirs } from "./dirs.js"
import { healWarrior } from "./HealWarrior.js"
 function keyHeal(){
    document.addEventListener("keydown", (e)=>{
        if(e.code === "KeyE" && dirs.buffContainer.children.length !== 0 ){
            dirs.buffContainer.querySelector(".buff").remove()
            healWarrior()
        }
    })
}
keyHeal()
