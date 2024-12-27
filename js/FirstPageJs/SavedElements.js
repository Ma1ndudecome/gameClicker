import {dirs} from './dirs.js'
import { glory } from './DamageGlory.js'
import { stylehpBarWidth, classListRemoveFunc } from "./BaseFunc.js";

export function statusSaved(){
    if(localStorage.getItem("hpGlory")){
        glory.hp = Number(localStorage.getItem("hpGlory"))
        stylehpBarWidth(dirs.GloryHealth, glory.hp)
    }
    if(localStorage.getItem("score")){
        dirs.scoreI.textContent = localStorage.getItem("score")
    }
    if(localStorage.getItem("isAliveLastWarrior") === 'false'){
        dirs.warriorContainer.remove()
        console.log(dirs.id)
       
        clearInterval(dirs.id)
        classListRemoveFunc(document.body, "show-bef")
        classListRemoveFunc(document.body, "show-after-more")
    }
   




}
