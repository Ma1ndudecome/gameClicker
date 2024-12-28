import {ObserverHp} from "../FirstPageJs/ObserverHpWarrior.js"
 class Boss{
    constructor(){
        this.hp = 300;
        this.hpObs = new ObserverHp()
        this.isAlive = true
    }
    damage(value){
        this.hp -= value;
        if(this.hp <= 0){
            this.hp = 0;
            this.isAlive = false
            this.hpObs.broadcast("kill")
            return
        }
        this.hpObs.broadcast("damage")
    }
}
export const boss = new Boss()