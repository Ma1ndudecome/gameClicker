import { warrior } from "../FirstPageJs/DamageKillWarrior.js";
import { dirs } from "./dirs.js";
import { damageWarrior } from "../FirstPageJs/DamageKillWarrior.js";
import { killWarrior } from "./KillWarrior.js";
import { styleHpBarTextContent } from "../FirstPageJs/BaseFunc.js";
import { soundHit, soundDead } from "../FirstPageJs/audioM.js";
import { playAudio } from "../FirstPageJs/playAudio.js";
export function warriorDamageEventListener(el, warrior){
    el.addEventListener("click", ()=>{
        if(!dirs.sword.classList.contains("attackAnim")){
            warrior.damage(10)
        }
   })
}
warriorDamageEventListener(dirs.warrior, warrior)
export function subscribeFunc(healtWarrior, warrior, containerHealth, ElWarrior){
    warrior.obs.subscribe((e)=>{
        if(e === "damage"){
            damageWarrior(healtWarrior, warrior)
            playAudio(soundHit)
        }else if(e === "kill"){
            dirs.scoreEl += 42
            styleHpBarTextContent(dirs.score, dirs.scoreEl)
            killWarrior(healtWarrior, containerHealth, warrior, ElWarrior )
            localStorage.setItem("score", dirs.scoreEl)
            playAudio(soundDead)
        }
    })
}
subscribeFunc(dirs.healthWarrior,warrior, dirs.healthWarriorContainer,dirs.warrior )
