import { dirs } from "./dirs.js"
import { classListAddFunc } from "../FirstPageJs/BaseFunc.js"
export function killGlory(){
    clearInterval(dirs.damageInterval)
    classListAddFunc(dirs.loseIcon, "showLoseIcon")
}