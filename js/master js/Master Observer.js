class Observer{

    constructor(){
        this.subscribers = []
    }

    broadcast(data){
        this.subscribers.forEach(subscriber => subscriber(data))
    }

    subscribe(fn){
        this.subscribers.push(fn)
    }

    unscribe(){

    }
}