class Warrior {
    static health = 100
    constructor() {
        this.health = Warrior.health
        this.name = "some Warrior"
    }
    damage() {
        if (!img.classList.contains("attack")) {
            Warrior.health -= 20
            healt.style.width = Warrior.health + "%"
        }
        if (Warrior.health === 0) {
            ItemWarrior.remove()
            clearInterval(id)
            return
        }
    }
}
class Glory{
    static health = 100
    constructor(){
        this.health = Glory.health
        this.name = "Realy Glory"
    }
    damage(){
        Glory.health -= 10
        GloryHealth.style.width = Glory.health + "%"
    }
}
const img = document.querySelector(".img")
const warrior = document.querySelector(".warriorDude")
const ItemWarrior = document.querySelector(".warrior")
const healt = document.querySelector(".health-warrior-item")
const Warriors = new Warrior()
const GloryPers = new Glory()
const GloryHealth = document.querySelector(".health_item")
console.log(GloryPers)
console.log(GloryHealth)
let id = setInterval(()=>{
    GloryPers.damage()
}, 2000)
















document.addEventListener("click", () => {
    img.classList.add("attack")

})
setInterval(() => {
    if (img.classList.contains("attack")) {
        img.classList.remove("attack")
        return
    }
}, 1300)

warrior.addEventListener("click", () => {
    Warriors.damage()

})