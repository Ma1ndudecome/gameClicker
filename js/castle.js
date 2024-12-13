
class Character {
    constructor(name, health = 100) {
        this.healt = health
        this.name = name;
        this.isAlive = true;
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
            this.isAlive = false
            return
        }
        this.healt -= 15
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
        if(this.healt <=0){
            
            this.isAlive = false
            this.die()
            return
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
const invAdd = document.querySelector(".block")
const buffEl = document.querySelector(".buff")
let id
function damageGlory(){
     id = setInterval(()=>{
        glory.damage()
        GloryHealth.style.width = glory.healt + "%"
    },1500)
    return id
}
damageGlory()
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
    if (!warriors.isAlive) {
        clearInterval(id)
        buff.classList.add("show")
        return
    }
    warriroHealt.style.width = warriors.healt + "%"

}

buffEl.addEventListener("click", () => {
    buffEl.classList.add("toInv");
    invAdd.append(buffEl);
    buffEl.addEventListener("click", () => {
        glory.healt += 30;
        GloryHealth.style.width = glory.healt + '%'

        buffEl.remove()
    }, { once: true })
    console.log('123')
}, { once: true })
