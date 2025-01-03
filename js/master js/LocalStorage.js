import { stylehpBarWidth, styleHpBarTextContent } from "../FirstPageJs/BaseFunc.js";
import { glory } from "./damageGlory.js";
import { dirs } from "./dirs.js";
import { boss } from "./BossItem.js";
import { showBossHp } from "./DamageBoss.js";
import { killBoss } from "./KillBoss.js";
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
        {
            key:"bossHp",
            do:value=>{
                if(value === null){
                    return
                }
                boss.hp = Number(value)
                showBossHp()
            }
        },
        {
            key:"IsAliveBoss",
            do:value=>{
                if(value === null) return
                killBoss()
            }
        }
        
    ]
    dataEl.forEach(el=>{
        
        const value = localStorage.getItem(el.key)
        if(value !== null){
            el.do(value)
        }
    })
}
loadingData()