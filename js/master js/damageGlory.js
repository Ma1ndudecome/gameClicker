import {Glory} from "../FirstPageJs/Glory.js"
import { dirs } from "./dirs.js"
import { stylehpBarWidth,  classListAddFunc, classListRemoveFunc } from "../FirstPageJs/BaseFunc.js"
export const glory = new Glory()

export function damageGlory(){
    dirs.intervalId = setTimeout(()=>{
        glory.damage(0)
        stylehpBarWidth(dirs.hpBar, glory.hp)


        classListAddFunc(document.body, "showBef")

        setTimeout(()=>{
            classListRemoveFunc(document.body, "showBef")
        }, 1000)

        localStorage.setItem("hpGlory", glory.hp)
    }, 3000)
}


