import { warrior } from "../FirstPageJs/DamageKillWarrior.js";
import { dirs } from "./dirs.js";
import { damageWarrior } from "../FirstPageJs/DamageKillWarrior.js";
import { killWarrior } from "./KillWarrior.js";
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
        }else if(e === "kill"){
            killWarrior(healtWarrior, containerHealth, warrior, ElWarrior )
        }
    })
}
subscribeFunc(dirs.healthWarrior,warrior, dirs.healthWarriorContainer,dirs.warrior )
