import { glory } from "./damageGlory.js";
import { damageGlory } from "./damageGlory.js";
import { killGlory } from "./KillGlory.js";

glory.obsHp.subscribe((e)=>{
    if(e === "damage"){
        damageGlory()
    }else if(e === "kill"){
        killGlory()
    }
})

glory.damage(0)