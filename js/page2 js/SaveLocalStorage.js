import { glory } from "./DamageGlory.js"
import { dirs } from "./dirs.js"
import { buffEventFunction } from "./EventListenerForBuffInInventory.js"
import { styleHpBarTextContent, stylehpBarWidth, classListAddFunc } from "../FirstPageJs/BaseFunc.js"
function saveLocalStorage(){
    const saveEl = [
        {
            key:"hpGlory",
            do:(value)=>{
                glory.hp = Number(value)
                stylehpBarWidth(dirs.healGlory, glory.hp)
                styleHpBarTextContent(dirs.textHeal, glory.hp)
            }
        },
        {
            key:"AllWarriorDie",
            do:(value)=>{
                if(value === 'true'){
                    clearInterval(dirs.damageInterval)
                    clearInterval(dirs.intervalSpawn)

                    dirs.healthWarriorContainer.remove()
                    dirs.warrior.remove()

                }
            }
        },
        {
            key:"masIndex",
            do:(value)=>{
                const mas = value.split(',')
                mas.forEach(el=>{
                    dirs.inventory[Number(el)].insertAdjacentHTML("afterbegin", localStorage.getItem("buffMarking"))
                    classListAddFunc(dirs.inventory[Number(el)].querySelector(".buff"), "toInv")
                    buffEventFunction(dirs.inventory[Number(el)].querySelector(".buff"))
                })
            }
        },
    ]

    saveEl.forEach(el=>{
        const value = localStorage.getItem(el.key)
        el.do(value)
    })
}
saveLocalStorage()