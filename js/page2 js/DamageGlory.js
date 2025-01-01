import { dirs } from "./dirs.js"
import { classListAddFunc, stylehpBarWidth, styleHpBarTextContent, classListRemoveFunc } from "../FirstPageJs/BaseFunc.js";
import { killGlory } from "./KillGlory.js";
import { Glory } from "../FirstPageJs/Glory.js";
export const glory = new Glory
function damageGlory(){
    dirs.damageInterval = setTimeout(()=>{
        glory.damage(2)

        stylehpBarWidth(dirs.healGlory,glory.hp)
        styleHpBarTextContent(dirs.textHeal, glory.hp)

        classListAddFunc(document.body, "showBef")

        setTimeout(()=>{
            classListRemoveFunc(document.body, "showBef")
        }, 500)

        localStorage.setItem("hpGlory", glory.hp)
    },1000)
}

glory.obsHp.subscribe((e)=>{
    if(e === 'damage'){
        damageGlory()
    }else if(e === 'kill'){
        killGlory()
    }
})
glory.damage(0)

