import { warrior } from "../FirstPageJs/DamageKillWarrior.js";
import { dirs } from "./dirs.js";
import { damageWarrior } from "../FirstPageJs/DamageKillWarrior.js";
import { killWarrior } from "./KillWarrior.js";
dirs.warrior.addEventListener("click", ()=>{
     if(!dirs.sword.classList.contains("attackAnim")){
        warrior.damage(25)
     }
})
warrior.obs.subscribe((e)=>{
    if(e === "damage"){
        damageWarrior(dirs.healthWarrior, warrior)
    }else if(e === "kill"){
        killWarrior(dirs.healthWarrior, dirs.healthWarriorContainer, warrior,dirs.warrior )
    }
})