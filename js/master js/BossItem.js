class Boss{
    constructor(){
        this.hp = 300;
        this.hpObs = new ObserverHp();
        this.Alive = true
    }
    damage(value){
        this.hp -= value
        if(this.hp <= 0){
            this.hp = 0
            this.Alive = false
            this.hpObs.broadcast("kill")
            return
        }
        this.hpObs.broadcast("damage")
    }
    
}