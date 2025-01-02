import { stylehpBarWidth, styleHpBarTextContent } from "../FirstPageJs/BaseFunc.js";
import { glory } from "./damageGlory.js";
import { dirs } from "./dirs.js";
function loadingData(){
    
    const dataEl = [
        {
            key:"hpGlory",
            do:value=>{
                if(value === null){
                    return
                }
                glory.hp = Number(value)
                stylehpBarWidth(dirs.hpBar, glory.hp)
                styleHpBarTextContent(dirs.hpBarText, glory.hp)
            }
        },
        
    ]
    dataEl.forEach(el=>{
        console.log(el.key)
        const value = localStorage.getItem(el.key)
        if(value !== null){
            el.do(value)
        }
    })
}
loadingData()