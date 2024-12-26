class Glory{
    constructor(){
        this.hp = 100;
        this.obsHp = new ObserverGloryHp();
    }
    damage(value){
        this.hp -= value
        if(this.hp <=0){
            this.hp = 0
            this.obsHp.broadcast("kill")
            return
        }
        this.obsHp.broadcast("damage")
       

    }
    addHp(value){
        this.hp = Math.min(this.hp + value, 100)
    }
}