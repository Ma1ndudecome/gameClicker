import { glory } from "./damageGlory.js";
import { stylehpBarWidth, styleHpBarTextContent, classListAddFunc, classListRemoveFunc } from "../FirstPageJs/BaseFunc.js";
import { dirs } from "./dirs.js";
import {playAudio} from "../FirstPageJs/playAudio.js"
import {soundHeal, soundDringPotion} from "../FirstPageJs/audioM.js"
export function healGlory(){
    glory.addHp(20)

    stylehpBarWidth(dirs.hpBar, glory.hp)


    classListAddFunc(document.body, "showAfter")

    playAudio(soundHeal)

    playAudio(soundDringPotion)


    setTimeout(()=>{
        classListRemoveFunc(document.body, "showAfter")
    }, 500)

    localStorage.setItem("hpGlory", glory.hp)
}