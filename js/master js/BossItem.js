class Boss{
    constructor(){
        this.hp = 300;
        this.hpObs = new ObserverHp()
    }
    damage(value){
        this.hp -= value
        if(this.hp <= 0){
            this.hp = 0
            this.hpObs.broadcast("kill")
            return
        }
        this.hpObs.broadcast("damage")
    }
    
}