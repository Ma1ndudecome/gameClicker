import { boss } from "./BossItem.js";
import { damageBoss } from "./DamageBoss.js";
import { killBoss } from "./KillBoss.js";
boss.hpObs.subscribe((event)=>{
    if(event === "damage"){
        damageBoss()
    }else if(event === "kill"){
        killBoss()
    }
})