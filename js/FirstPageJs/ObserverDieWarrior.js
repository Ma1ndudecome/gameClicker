class ObserverDie{
    constructor(){
        this.subscribers = []
    }

    subscribe(func){
        this.subscribers.push(func)
    }
    unsubscrive(func){
        this.subscribers = this.subscribers.filter(el=> el !== func)
    }
    broadcast(){
        this.subscribers.forEach(el=>el())
    }
}