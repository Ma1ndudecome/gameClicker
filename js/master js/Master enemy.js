const enemy = {
    hp:300,
    updateHp(){
        this.hp = value
    }

}

const damage = () =>{
    // player.hp -= 20
    console.log('good');
    Observer.damage.broadcast()
}

Observer.damage.subscribe()

// setInterval(damage, 5000)

