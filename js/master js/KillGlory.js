import { classListAddFunc } from "../FirstPageJs/BaseFunc.js";
import { dirs } from "./dirs.js";
export function killGlory(){
    clearTimeout(dirs.intervalId)
    clearInterval(dirs.spawnInterval)
    classListAddFunc(dirs.loseIcon, "showLoseIcon")
}