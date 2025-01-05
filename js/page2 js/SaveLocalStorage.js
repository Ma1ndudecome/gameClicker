import { glory } from "./DamageGlory.js"
import { dirs } from "./dirs.js"
import { buffEventFunction } from "./EventListenerForBuffInInventory.js"
import { styleHpBarTextContent, stylehpBarWidth, classListAddFunc } from "../FirstPageJs/BaseFunc.js"
function saveLocalStorage(){
    const saveEl = [
        {
            key:"hpGlory",
            do:(value)=>{
                if(value === null){
                    return
                }
                glory.hp = Number(value)
                stylehpBarWidth(dirs.healGlory, glory.hp)
                styleHpBarTextContent(dirs.textHeal, glory.hp)
            }
        },
        {
            key:"AllWarriorDie",
            do:(value)=>{
                if(value === null){
                    return
                }else if(value === 'true'){
                    clearInterval(dirs.damageInterval)
                    clearInterval(dirs.intervalSpawn)

                    dirs.healthWarriorContainer.remove()
                    dirs.warrior.remove()
                    setTimeout(()=>{
                        location.href = './master.html'
                    },2500)

                }
            }
        },
        {
            key:"masIndex",
            do:(value)=>{
                if(value === '' || value === null){
                    return
                }
                dirs.masIndex = value.split(',')
                
                dirs.masIndex.forEach(el=>{
                    dirs.inventory[Number(el)].insertAdjacentHTML("afterbegin", localStorage.getItem("buffMarking"))
                    classListAddFunc(dirs.inventory[Number(el)].querySelector(".buff"), "toInv")
                    buffEventFunction(dirs.inventory[Number(el)].querySelector(".buff"))
                })
            }
        },
        {
            key:"score",
            do:value=>{
                styleHpBarTextContent(dirs.score, value)
            }
        }
    ]

    saveEl.forEach(el=>{
        const value = localStorage.getItem(el.key)
        el.do(value)
    })
}
saveLocalStorage()