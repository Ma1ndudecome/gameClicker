import { dirs } from "./dirs.js";
import { markingBuff } from "./markingBuff.js";
import { healGlory } from "./HealGlory.js";
export function spawnBuffRandom(){
    const randomPositionX = Math.floor(Math.random()*70)
    const randomPositionY = Math.floor(Math.random()*70)

    document.body.insertAdjacentHTML("afterbegin",markingBuff())
    const buff = document.body.querySelector(".buff")

    buff.style.left = randomPositionX + '%'
    buff.style.top = randomPositionY+ '%'
    
    buff.addEventListener("click", (e)=>{
        e.target.remove()
        healGlory()
    }, {once:true})
}

function spawn(){
    dirs.spawnInterval = setInterval(()=>{
        spawnBuffRandom()
    }, 5000)
}
spawn()