import { showBossHp } from "./DamageBoss.js";
import { classListAddFunc, classListRemoveFunc, styleHpBarTextContent} from "../FirstPageJs/BaseFunc.js";
import { dirs } from "./dirs.js";
import { scores } from "./higestScore.js";
export function killBoss(){
    dirs.scoreEl += 45

    showBossHp()

    classListAddFunc(dirs.bossContainer, "dieBoss")
    classListRemoveFunc(document.body, "showBef")

    scores()
    
    clearInterval(dirs.intervalId)
    clearInterval(dirs.spawnInterval)

    setTimeout(()=>{
        dirs.bossItem.remove()
        dirs.healthBoss.remove()
    }, 2000)

    setTimeout(()=>{
        location.href = './castle.html'
    }, 2000)
    localStorage.setItem("IsAliveBoss", false)
    styleHpBarTextContent(dirs.score, dirs.scoreEl)
    localStorage.setItem("score", dirs.scoreEl)
}