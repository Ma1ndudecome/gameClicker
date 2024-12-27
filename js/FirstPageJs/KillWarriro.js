import { dirs } from "./dirs.js";
import { styleHpBarTextContent } from "./BaseFunc.js";
import { createWarrior } from "./createWarrior.js";
import { spawnNewBuff } from "./spawnBuff.js";
import { classListRemoveFunc } from "./BaseFunc.js";
import { glory } from "./DamageGlory.js";
import { warrior as warriorItems } from "./DamageKillWarrior.js";

export function killWarrior(el, warrior){
    spawnNewBuff()
    el.remove();
    warrior.die()

    dirs.counterWarrior += 1
    dirs.score += 38
    localStorage.setItem("score", dirs.score)
    styleHpBarTextContent(dirs.scoreI, dirs.score)
    if(dirs.counterWarrior === 5){
        localStorage.setItem("isAliveLastWarrior", warriorItems.isAlive)
        
        clearInterval(dirs.id)
        classListRemoveFunc(document.body, "show-bef")
        classListRemoveFunc(document.body, "show-after-more")
        return
    }
    createWarrior()
}