 import { Glory } from "./Glory.js"
 import {dirs} from "./dirs.js"
 import { classListAddFunc, styleHpBarWidth } from "./BaseFunc.js"
 const glory = new Glory()

 function killGlory(){
    clearInterval(dirs.id)
    classListAddFunc(dirs.loseIcon, "showLoseIcon")
    audioPlay(loseSound)
}


 function damageGlory(){
    dirs.id = setTimeout(()=>{
        classListAddFunc(document.body, "show-bef")
        document.body.classList.toggle("show-after-more")
        glory.damage(1)
         styleHpBarWidth(dirs.GloryHealth, glory.hp)
        // dirs.GloryHealth.style.width = glory.hp + '%'
        localStorage.setItem("hpGlory", dirs.GloryHealth.style.width)

    }, 1500)
}

export function damageSubscribe(){
    glory.obsHp.subscribe((event)=>{
        if(event === "damage"){
            damageGlory()
        }else if(event === "kill"){
            killGlory()
        }
    })
    glory.damage(1)
}