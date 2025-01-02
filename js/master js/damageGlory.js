import {Glory} from "../FirstPageJs/Glory.js"
import { dirs } from "./dirs.js"
import { stylehpBarWidth, styleHpBarTextContent, classListAddFunc, classListRemoveFunc } from "../FirstPageJs/BaseFunc.js"
export const glory = new Glory()

export function damageGlory(){
    dirs.intervalId = setTimeout(()=>{
        glory.damage(1)
        stylehpBarWidth(dirs.hpBar, glory.hp)

        styleHpBarTextContent(dirs.hpBarText, glory.hp)

        classListAddFunc(document.body, "showBef")

        setTimeout(()=>{
            classListRemoveFunc(document.body, "showBef")
        }, 1000)

        localStorage.setItem("hpGlory", glory.hp)
    }, 3000)
}


