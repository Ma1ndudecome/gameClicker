import { ObserverHp } from "./ObserverHpWarrior.js";
import { ObserverDie } from "./ObserverDieWarrior.js";

export class Warrior{
    constructor(){
        this.hp = 100;
        this.obs = new ObserverHp()
        this.dieObs = new ObserverDie()
        this.isAlive = true
    }
    damage(value){
        this.hp -= value

        if(this.hp <=0){
            this.obs.broadcast("kill")
            this.hp = 0;
            
        }
        this.obs.broadcast("damage")
    }
    die(){
        this.isAlive = false
        this.dieObs.broadcast()
    }
}