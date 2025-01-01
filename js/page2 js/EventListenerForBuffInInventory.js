import { HealGlory } from "./HealGlory.js"
import { dirs } from "./dirs.js"
export function buffEventFunction(el){
    el.addEventListener("click", (e)=>{
        
        dirs.inventory.forEach((el,i)=>{
            if(el === e.currentTarget.parentElement){
              dirs.masIndex = dirs.masIndex.filter(el=>Number(el) !== i)
              localStorage.setItem("masIndex", dirs.masIndex)
            }
        })
        
        
        
        e.currentTarget.remove()
        HealGlory()
    }, {once:true})
}