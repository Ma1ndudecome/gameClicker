import {dirs} from './dirs.js'
import { glory } from './DamageGlory.js'
import { stylehpBarWidth, classListRemoveFunc } from "./BaseFunc.js";

export function statusSaved(){
    const saveEl = [
        {
            key:"masIndex",
            do:(value)=>{
                dirs.indexMas =  value.split(',').map(el=>Number(el))
                
                
            }
        },
        {
            key:"hpGlory",
            do:(value)=>{
                glory.hp = Number(value)
                stylehpBarWidth(dirs.GloryHealth, glory.hp)
            }
        },
        {
            key:"score",
            do:(value)=>{
                dirs.scoreI.textContent = value
                dirs.score = Number(value)
            }
        },
        {
            key:"isAliveLastWarrior",
            do:(value)=>{
                if(value === 'false'){
                    dirs.warriorContainer.remove()
                    clearInterval(dirs.id)
                    classListRemoveFunc(document.body, "show-bef")
                    classListRemoveFunc(document.body, "show-after-more")
                }
            }
        },

    ]
  
    if(localStorage.getItem("counterWarrior")){
        dirs.counterWarrior = Number(localStorage.getItem("counterWarrior"))
    }
    if(localStorage.getItem("highestScore")){
        dirs.higestScore =  Number(localStorage.getItem("highestScore"))
    }
    if(Number(localStorage.getItem("counterBuff")) !== 0){
        Number(localStorage.getItem("counterBuff"))
    }
    saveEl.forEach(el=>{
        const value = localStorage.getItem(el.key)
        if(value !== null){
            el.do(value)
        }
    })
    
    console.log(saveEl)
}