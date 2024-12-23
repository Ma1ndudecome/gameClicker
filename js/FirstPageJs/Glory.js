class Glory{
    constructor(){
        this.hp = 100;
        this.obsHp = new ObserverGloryHp();
    }
    damage(value){
        if(this.hp <=0){
            this.hp = 0
            this.obsHp.broadcast("kill")
            return
        }
        this.obsHp.broadcast("damage")
        this.hp -= value

    }
    addHp(value){
        this.hp = Math.min(this.hp + value, 100)
    }
}