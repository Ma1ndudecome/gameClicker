import {markinWarrior} from "./markingNewWarrior.js"
import { dirs } from "./dirs.js"
import { Warrior } from "../FirstPageJs/Warrior.js";
import { warriorDamageEventListener } from "./damageWarriorObs.js";
import { subscribeFunc } from "./damageWarriorObs.js";
export function spawnWarrior(){
    const warrior = new Warrior()
    dirs.spawnWarrior.insertAdjacentHTML("afterbegin", markinWarrior())
    const healWarrior = dirs.spawnWarrior.querySelector(".health-warrior-item")
    const healthWarriorContainer = dirs.spawnWarrior.querySelector(".health-warrior")
    const warriorEl = dirs.spawnWarrior.querySelector(".Enemy")
    warriorDamageEventListener(warriorEl, warrior)
    subscribeFunc(healWarrior, warrior, healthWarriorContainer, warriorEl)
}