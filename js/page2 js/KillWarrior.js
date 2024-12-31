import { dirs } from "./dirs.js"
export function killWarrior(elC,el,warrior, img){
    elC.remove()
    el.remove()
    warrior.die()
    img.remove()
    clearInterval(dirs.damageInterval)
}