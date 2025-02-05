import { dirs } from "./dirs.js"
import { spawnWarrior } from "./spawnNewWarrior.js"
import { scores } from "./higestScore.js"
export function killWarrior(elC,el,warrior, img){
    elC.remove()
    el.remove()
    warrior.die()
    img.remove()
    scores()
    if(dirs.counterWarrior === 1){
        clearInterval(dirs.damageInterval)
        clearInterval(dirs.intervalSpawn)
        localStorage.setItem("AllWarriorDie", true)

        setTimeout(()=>{
            location.href = './master.html'
        },2500)
        return
    }
    spawnWarrior()
    dirs.counterWarrior += 1
}