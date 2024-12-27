import {addAnimToSword, removeStyleToSword} from "../FirstPageJs/AnimationAttack.js"
import { dirs } from "./dirs.js"
import { warrior } from "./DamageKillWarrior.js"
import { clickDamage, callDamageOrDie } from "./DamageKillWarrior.js"
import { startDamageGlory } from "./DamageGlory.js"
import "./UseBuffKey.js"
import { statusSaved } from "./SavedElements.js"
clickDamage(dirs.warrior, warrior)
callDamageOrDie(warrior, dirs.warriroHealt, dirs.warriorContainer, warrior)
startDamageGlory()
addAnimToSword()
removeStyleToSword()
statusSaved()