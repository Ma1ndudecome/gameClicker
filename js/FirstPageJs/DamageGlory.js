import { Glory } from "./Glory.js";
import { classListAddFunc, stylehpBarWidth } from "./BaseFunc.js";
import { dirs } from "./dirs.js";
export const glory = new Glory()

function killGlory(){
    clearInterval(dirs.id)
    classListAddFunc(dirs.loseIcon, "showLoseIcon")
}

function damageGlory(){
    dirs.id = setTimeout(()=>{
        classListAddFunc(document.body, "shof-bef")
        document.body.classList.toggle("show-after-more")
        glory.damage(1)
        stylehpBarWidth(dirs.GloryHealth, glory.hp)
        localStorage.setItem("hpGlory", glory.hp)

    }, 1500)
}
export function startDamageGlory(){
    glory.obsHp.subscribe((event)=>{
        if(event === "damage"){
            damageGlory()
        }else if(event === "kill"){
            killGlory()
        }
    })
    glory.damage(1)
}