import { classListAddFunc } from "../FirstPageJs/BaseFunc.js";
import { dirs } from "./dirs.js";
import { lose} from "../FirstPageJs/Audio.js"
import { playAudio } from "../FirstPageJs/playAudio.js"
export function killGlory(){
    clearTimeout(dirs.intervalId)
    clearInterval(dirs.spawnInterval)

    classListAddFunc(dirs.loseIcon, "showLoseIcon")

    playAudio(lose)
}