import {dirs} from './dirs.js'
import { glory } from './DamageGlory.js'
import { stylehpBarWidth, classListRemoveFunc } from "./BaseFunc.js";

export function statusSaved(){
    if(localStorage.getItem("masIndex")){
       dirs.indexMas =  localStorage.getItem("masIndex").split(',').map(el=>Number(el))
       console.log(dirs.indexMas)
    }
    if(localStorage.getItem("hpGlory")){
        glory.hp = Number(localStorage.getItem("hpGlory"))
        stylehpBarWidth(dirs.GloryHealth, glory.hp)
    }
    if(localStorage.getItem("score")){
        dirs.scoreI.textContent = localStorage.getItem("score")
    }
    if(localStorage.getItem("isAliveLastWarrior") === 'false'){
        dirs.warriorContainer.remove()
        clearInterval(dirs.id)
        classListRemoveFunc(document.body, "show-bef")
        classListRemoveFunc(document.body, "show-after-more")
    }
    if(localStorage.getItem("counterWarrior")){
        dirs.counterWarrior = Number(localStorage.getItem("counterWarrior"))
    }
    if(Number(localStorage.getItem("counterBuff")) !== 0){
        Number(localStorage.getItem("counterBuff"))
    }
   




}