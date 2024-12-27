import { dirs } from "./dirs.js"
import { Warrior } from "./Warrior.js"
import { callDamageOrDie } from "./DamageKillWarrior.js"
import { clickDamage } from "./DamageKillWarrior.js"
import { damageWarrior } from "./DamageKillWarrior.js"
import { spawnNewBuff } from "./spawnBuff.js"
function createMarkingWarroir(){
    return `
    <div class="warrior">
        <div class="health-warrior">
        <div class="health-warrior-item"></div>
    </div>
    <img src="../img/secondWarrior-unscreen.gif" alt="" class="warriorDude">
    `
}
function insertWarrior(){
    dirs.spawnWarrior.insertAdjacentHTML("afterbegin", createMarkingWarroir())
}

export function createWarrior(){
    insertWarrior()
    const warriors = new Warrior()
    const healt = dirs.spawnWarrior.querySelector(".health-warrior-item")
    const warriorEl = dirs.spawnWarrior.querySelector(".warriorDude")
    const containerWarrior = dirs.spawnWarrior.querySelector(".warrior")
    callDamageOrDie(warriors, healt, containerWarrior, warriors)
    clickDamage(warriorEl, warriors)
    damageWarrior(healt, warriors)
    
    warriors.dieObs.subscribe(spawnNewBuff)
    dirs.randomPosition = Math.floor(Math.random()*30)
    containerWarrior.style.left = dirs.randomPosition + "%"
}