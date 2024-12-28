import { boss } from "./BossItem.js";
import { dirs } from "./dirs.js";
import { classListAddFunc, styleHpBarTextContent, stylehpBarWidth } from "../FirstPageJs/BaseFunc.js";
import { pixelToProccent } from "./PixelToProccentFunc.js";

dirs.bossItem.addEventListener("click", ()=>{
    if(!dirs.sword.classList.contains("attackAnim")){
        boss.damage(20)
    }
})

export function damageBoss(){
    classListAddFunc(dirs.bossItem, "damage")
    showBossHp()
}

export function showBossHp(){
    styleHpBarTextContent(dirs.healthBossText, boss.hp)
    stylehpBarWidth(dirs.healthBossItem, pixelToProccent(boss.hp, 300))
}

