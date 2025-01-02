import { showBossHp } from "./DamageBoss.js";
import { classListAddFunc, classListRemoveFunc} from "../FirstPageJs/BaseFunc.js";
import { dirs } from "./dirs.js";
export function killBoss(){
    showBossHp()

    classListAddFunc(dirs.bossContainer, "dieBoss")
    classListRemoveFunc(document.body, "showBef")
    
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
}