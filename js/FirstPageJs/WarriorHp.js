import {dirs} from "./dirs.js"
import { styleHpBarTextContent, classListRemoveFunc } from "./BaseFunc.js";
const warrior = new Warrior()

function damageWarrior(el, warrior){
    el.style.width = warrior.hp + "%";
}

function killWarrior(el, warrior){
    el.remove()
    warrior.die()
    audioPlay(deadSound)


    dirs.counterWarrior += 1
    dirs.score += 38;
    localStorage.setItem("score", dirs.score)
    // dirs.scoreI.textContent = dirs.score
    styleHpBarTextContent(dirs.scoreI, dirs.score)
    if(dirs.counterWarrior === 5){
        clearTimeout(dirs.id)
        classListRemoveFunc(document.body, "show-bef")
        classListRemoveFunc(document.body, "show-after-more")
        setTimeout(()=>{
            location.href = "./master.html"
        },5000)
        return
    }

    createWarrior()
}
function damageKillWarrior(el, healthWarrior, containerWarrior, warrior){
    el.obs.subscribe((event)=>{
        if(event === "damage"){
            damageWarrior(healthWarrior, warrior)
        }else if(event === "kill"){
            killWarrior(containerWarrior, warrior)
        }
    })
}
damageKillWarrior(warrior, dirs.warriroHealt, dirs.warriorContainer, warrior)

function clickDamage(el, warrior){
    el.addEventListener("click", ()=>{
        if(!dirs.imgSword.classList.contains("attack")){
            warrior.damage(25)
            audioPlay(audioHitWarrior)

        }
        
    })
}
clickDamage(dirs.warrior, warrior)
