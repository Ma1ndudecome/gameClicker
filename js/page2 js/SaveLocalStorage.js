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
                    setTimeout(()=>{
                        location.href = './master.html'
                    },2500)

                }
            }
        },
        {
            key:"masIndex",
            do:(value)=>{
                if(value === '') return
                dirs.masIndex = value.split(',')
                console.log(dirs.masIndex)
                
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
                console.log(value)
                styleHpBarTextContent(dirs.score, value)
                dirs.scoreEl = Number(value)
            }
        },
        {
            key:"highestScore",
            do:value=>{
                dirs.higestScore = Number(value)
            }
        }
    ]

    saveEl.forEach(el=>{
        const value = localStorage.getItem(el.key)
        if(value !== null){
            el.do(value)
        }
    })
}
saveLocalStorage()