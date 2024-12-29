import { glory } from "./damageGlory.js";
import { stylehpBarWidth, styleHpBarTextContent, classListAddFunc, classListRemoveFunc } from "../FirstPageJs/BaseFunc.js";
import { dirs } from "./dirs.js";
import {playAudio} from "../FirstPageJs/playAudio.js"
import {soundHeal, soundDringPotion} from "../FirstPageJs/Audio.js"
export function healGlory(){
    glory.addHp(20)

    stylehpBarWidth(dirs.hpBar, glory.hp)

    styleHpBarTextContent(dirs.hpBarText, glory.hp)

    classListAddFunc(document.body, "showAfter")

    playAudio(soundHeal)

    playAudio(soundDringPotion)


    setTimeout(()=>{
        classListRemoveFunc(document.body, "showAfter")
    }, 500)
}