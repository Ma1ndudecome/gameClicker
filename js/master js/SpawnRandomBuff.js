import { dirs } from "./dirs.js";
import { markingBuff } from "./markingBuff.js";
import { healGlory } from "./HealGlory.js";

export function spawnBuffRandom(){
    const randomPositionX = Math.floor(Math.random()*70)
    const randomPositionY = Math.floor(Math.random()*30)

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
        deleteBuff()
        spawnBuffRandom()
    }, 4500)
}
spawn()
function deleteBuff(){
    setTimeout(()=>{
        const el = document.body.querySelector(".buff")
        if(el){
            el.remove()
        }
    },1500)
}