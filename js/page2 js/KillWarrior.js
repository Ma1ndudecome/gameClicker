import { dirs } from "./dirs.js"
import { spawnWarrior } from "./spawnNewWarrior.js"
export function killWarrior(elC,el,warrior, img){
    elC.remove()
    el.remove()
    warrior.die()
    img.remove()
    if(dirs.counterWarrior === 1){
        clearInterval(dirs.damageInterval)
        clearInterval(dirs.intervalSpawn)
        localStorage.setItem("AllWarriorDie", true)
        return
    }
    spawnWarrior()
    dirs.counterWarrior += 1
}