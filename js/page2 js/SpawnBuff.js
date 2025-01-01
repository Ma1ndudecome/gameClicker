import { dirs } from "./dirs.js"
import { markingBuff } from "../master js/markingBuff.js"
import { HealGlory } from "./HealGlory.js"
function spawnBuffRandom(){
    const randomPositionX = Math.floor(Math.random()*70)
    const randomPositionY = Math.floor(Math.random()*30)

    document.body.insertAdjacentHTML("afterbegin",markingBuff())
    const buff = document.body.querySelector(".buff")

    buff.style.left = randomPositionX + '%'
    buff.style.top = randomPositionY+ '%'
    
    buff.addEventListener("click", (e)=>{
        e.currentTarget.remove()
        HealGlory()
    }, {once:true})
}
function spawn(){
    dirs.intervalSpawn = setInterval(()=>{
        deleteBuff()
        spawnBuffRandom()
    },5000)
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