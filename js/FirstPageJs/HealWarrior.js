import { glory } from "./DamageGlory.js";
import { classListAddFunc, classListRemoveFunc, stylehpBarWidth } from "./BaseFunc.js";
import { dirs } from "./dirs.js";
export function healWarrior(){
    classListAddFunc(document.body, "show-after")
    setTimeout(()=>{
        classListRemoveFunc(document.body, "show-after")
    }, 1000)
    glory.addHp(30)
    stylehpBarWidth(dirs.GloryHealth, glory.hp)
    localStorage.setItem("hpGlory", glory.hp)

}