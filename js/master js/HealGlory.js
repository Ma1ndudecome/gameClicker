import { glory } from "./damageGlory.js";
import { stylehpBarWidth, styleHpBarTextContent, classListAddFunc, classListRemoveFunc } from "../FirstPageJs/BaseFunc.js";
import { dirs } from "./dirs.js";
export function healGlory(){
    glory.addHp(20)

    stylehpBarWidth(dirs.hpBar, glory.hp)

    styleHpBarTextContent(dirs.hpBarText, glory.hp)

    classListAddFunc(document.body, "showAfter")

    setTimeout(()=>{
        classListRemoveFunc(document.body, "showAfter")
    }, 500)
}