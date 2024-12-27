export class ObserverGloryHp{
    constructor(){
        this.subscribers = []
    }

    subscribe(func){
        this.subscribers.push(func)
    }
    unsubscrive(func){
        this.subscribers = this.subscribers.filter(el=> el !== func)
    }
    broadcast(data){
        this.subscribers.forEach(el=>el(data))
    }

}
