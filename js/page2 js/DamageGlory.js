import {glory} from "../FirstPageJs/DamageGlory.js"
import { dirs } from "./dirs.js"
import { classListAddFunc, stylehpBarWidth, styleHpBarTextContent } from "../FirstPageJs/BaseFunc.js";
import { killGlory } from "./KillGlory.js";
function damageGlory(){
    dirs.damageInterval = setTimeout(()=>{
        glory.damage(1)
        stylehpBarWidth(dirs.healGlory,glory.hp)
        styleHpBarTextContent(dirs.textHeal, glory.hp)
    },2000)
}

glory.obsHp.subscribe((e)=>{
    console.log(e)
    if(e === 'damage'){
        damageGlory()
    }else if(e === 'kill'){
        killGlory()
    }
})
glory.damage(0)
