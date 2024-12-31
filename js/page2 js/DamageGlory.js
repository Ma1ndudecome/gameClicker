import {glory} from "../FirstPageJs/DamageGlory.js"
import { dirs } from "./dirs.js"
import { classListAddFunc, stylehpBarWidth, styleHpBarTextContent, classListRemoveFunc } from "../FirstPageJs/BaseFunc.js";
import { killGlory } from "./KillGlory.js";
function damageGlory(damage){
    dirs.damageInterval = setTimeout(()=>{
        glory.damage(damage)
        stylehpBarWidth(dirs.healGlory,glory.hp)
        styleHpBarTextContent(dirs.textHeal, glory.hp)
        classListAddFunc(document.body, "showBef")
        setTimeout(()=>{
            classListRemoveFunc(document.body, "showBef")
        }, 1000)
    },2000)
}

glory.obsHp.subscribe((e)=>{
    if(e === 'damage'){
        damageGlory(1)
    }else if(e === 'kill'){
        killGlory()
    }
})
glory.damage(0)

