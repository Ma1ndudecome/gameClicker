import { glory } from "./DamageGlory.js"
import { dirs } from "./dirs.js"
import { stylehpBarWidth, styleHpBarTextContent } from "../FirstPageJs/BaseFunc.js"
import { playAudio } from "../FirstPageJs/playAudio.js"
import { soundHeal, soundDringPotion } from "../FirstPageJs/audioM.js"
import { classListAddFunc, classListRemoveFunc } from "../FirstPageJs/BaseFunc.js"
export function HealGlory(){
    glory.addHp(25)
    console.log(glory.hp)
    stylehpBarWidth(dirs.healGlory, glory.hp)

    soundHeal.volume = 0.5
    soundDringPotion.volume = 0.5

    playAudio(soundHeal)
    playAudio(soundDringPotion)

    classListAddFunc(document.body, "showAfter")

    setTimeout(()=>{
            classListRemoveFunc(document.body, "showAfter")
    }, 500)

    localStorage.setItem("hpGlory", glory.hp)
}