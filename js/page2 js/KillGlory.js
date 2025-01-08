import { dirs } from "./dirs.js"
import { classListAddFunc } from "../FirstPageJs/BaseFunc.js"
import { lose} from "../FirstPageJs/audioM.js"
import { playAudio } from "../FirstPageJs/playAudio.js"
export function killGlory(){
    clearInterval(dirs.damageInterval)
    clearInterval(dirs.intervalSpawn)
    
    classListAddFunc(dirs.loseIcon, "showLoseIcon")

    playAudio(lose)
}