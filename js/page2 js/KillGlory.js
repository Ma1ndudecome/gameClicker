import { dirs } from "./dirs.js"
import { classListAddFunc } from "../FirstPageJs/BaseFunc.js"
export function killGlory(){
    clearInterval(dirs.damageInterval)
    clearInterval(dirs.intervalSpawn)
    
    classListAddFunc(dirs.loseIcon, "showLoseIcon")
}