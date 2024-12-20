class Warrior{
    constructor(){
        this.hp = 100
        this.obs = new ObserverHp()
        this.dieObs = new ObserverDie()
        this.Alive = true
    }
    damage(value){
        this.hp -= value

        if(this.hp <= 0){
            this.obs.broadcast("kill")
            this.hp = 0
        }
        this.obs.broadcast("damage")
       
    }
    die(){
        this.Alive = false
        this.dieObs.broadcast()
    }

   
}


