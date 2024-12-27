import { Warrior } from "./Warrior.js";
import { dirs } from "./dirs.js";
import { killWarrior } from "./KillWarriro.js";

export const warrior = new Warrior()

export function damageWarrior(el, warrior){
    el.style.width = warrior.hp + "%"
}

export function callDamageOrDie(el, healthWarrior, containerWarrior, warrior){
    el.obs.subscribe((event)=>{
        if(event === "damage"){
            damageWarrior(healthWarrior, warrior)
        }else if(event === "kill"){
            killWarrior(containerWarrior, warrior)
        }
    })
}

export function clickDamage(el, warrior){
    el.addEventListener("click", ()=>{
        if(!dirs.imgSword.classList.contains("attack")){
            warrior.damage(25)
            
        }

    })
}