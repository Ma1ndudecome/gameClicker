import { glory } from "./DamageGlory.js"
import { dirs } from "./dirs.js"
import { stylehpBarWidth, styleHpBarTextContent } from "../FirstPageJs/BaseFunc.js"
import { playAudio } from "../FirstPageJs/playAudio.js"
import { soundHeal, soundDringPotion } from "../FirstPageJs/audio.js"
import { classListAddFunc, classListRemoveFunc } from "../FirstPageJs/BaseFunc.js"
export function HealGlory(){
    glory.addHp(20)

    stylehpBarWidth(dirs.healGlory, glory.hp)
    styleHpBarTextContent(dirs.textHeal, glory.hp)

    playAudio(soundHeal)
    playAudio(soundDringPotion)

    classListAddFunc(document.body, "showAfter")

    setTimeout(()=>{
            classListRemoveFunc(document.body, "showAfter")
        }, 500)
}