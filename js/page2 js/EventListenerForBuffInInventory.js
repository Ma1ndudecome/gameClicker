import { HealGlory } from "./HealGlory.js"
export function buffEventFunction(el){
    el.addEventListener("click", (e)=>{
        e.currentTarget.remove()
        const a = localStorage.getItem("masIndex").slice(localStorage.getItem("masIndex").length -1, localStorage.getItem("masIndex").length+1)
        console.log(a)
        HealGlory()
    }, {once:true})
}