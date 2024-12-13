
class Character {
    constructor(name, health = 100) {
        this.healt = health
        this.name = name;
    }
}
class Glory extends Character {
    constructor(name) {
        super(name)
        this.inventory = []
    }
    damage() {
        if(this.healt - 15 < 0){
            this.healt = 0
            return
        }
        if (!imgSword.classList.contains("attack")) {
            this.healt -= 15
        }
      
        
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name)
    }
    damage() {
        if (!imgSword.classList.contains("attack")) {
            this.healt -= 20
        }
    }
    die() {
        warriorContainer.remove()
    }
}
const glory = new Glory()
const warriors = new Warrior()
const buff = document.querySelector(".buff")
const imgSword = document.querySelector(".img")
const warrior = document.querySelector(".warriorDude")
const warriorContainer = document.querySelector(".warrior")
const warriroHealt = document.querySelector(".health-warrior-item")
const GloryHealth = document.querySelector(".health_item")



document.addEventListener("click", () => {
    imgSword.classList.add("attack")

})
setInterval(() => {
    if (imgSword.classList.contains("attack")) {
        imgSword.classList.remove("attack")
        return
    }
}, 1300)

warrior.addEventListener("click", createDamageWarrior)


function createDamageWarrior() {
    warriors.damage()
    if (warriors.healt <= 0) {
        warriors.die()
        buff.classList.add("show")
        return
    }
    warriroHealt.style.width = warriors.healt + "%"

}

