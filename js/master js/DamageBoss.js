import { boss } from "./BossItem.js";
import { dirs } from "./dirs.js";
import { classListAddFunc, styleHpBarTextContent, stylehpBarWidth, classListRemoveFunc } from "../FirstPageJs/BaseFunc.js";
import { pixelToProccent } from "./PixelToProccentFunc.js";
import { playAudio } from "../FirstPageJs/playAudio.js";
import { soundDamageGragon } from "../FirstPageJs/Audio.js";
dirs.bossItem.addEventListener("click", ()=>{
    if(!dirs.sword.classList.contains("attackAnim")){
        boss.damage(17)
        playAudio(soundDamageGragon)
    }
})

export function damageBoss(){
    classListAddFunc(dirs.bossItem, "damage")
    showBossHp()
    setTimeout(()=>{classListRemoveFunc(dirs.bossItem, "damage")}, 300)
}

export function showBossHp(){
    styleHpBarTextContent(dirs.healthBossText, boss.hp)
    stylehpBarWidth(dirs.healthBossItem, pixelToProccent(boss.hp, 300))
}

