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
            do:value=>{
                glory.hp = Number(value)
                stylehpBarWidth(dirs.GloryHealth, glory.hp)
            }
        },
        {
            key:"score",
            do:value=>{
                dirs.scoreI.textContent = value
                dirs.score = Number(value)
            }
        },
        {
            key:"isAliveLastWarrior",
            do:value=>{
                if(value === 'false'){
                    dirs.warriorContainer.remove()
                    clearInterval(dirs.id)
                    classListRemoveFunc(document.body, "show-bef")
                    classListRemoveFunc(document.body, "show-after-more")
                }
            }
        },
        {
            key:"counterWarrior",
            do:value=>{
                dirs.counterWarrior = Number(value)
            }
        },
        {
            key:"highestScore",
            do:value=>{
                dirs.higestScore = Number(value)
            }
        },  
    ]

    saveEl.forEach(el=>{
        const value = localStorage.getItem(el.key)
        if(value !== null){
            el.do(value)
        }
    })
    
}