
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
            this.healt -= 30
        }
        if(this.healt <=0){
            this.healt = 0
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
const container = document.querySelector(".container")
const loseIcon = document.querySelector(".lose")
let id
function damageGlory(){
     id = setInterval(()=>{
        glory.damage()
        showHp(GloryHealth, glory)
        document.body.classList.toggle("show-bef")
        killGlory()

    },1500)

    return id
}
damageGlory()
container.addEventListener("click", () => {
    classListAddFunc(imgSword, "attack")
   

})
setInterval(() => {
    if (imgSword.classList.contains("attack")) {
        classListRemoveFunc(imgSword, "attack")

        return
    }
}, 1300)

warrior.addEventListener("click", createDamageWarrior)


function createDamageWarrior() {
    warriors.damage()
    if (!warriors.isAlive) {
        clearInterval(id)
        classListRemoveFunc(document.body, "show-bef")

        classListAddFunc(buff, "show")

        return
    }
    showHp(warriroHealt, warriors)

}

buffEl.addEventListener("click", () => {
    classListAddFunc(buffEl, "toInv")

    invAdd.append(buffEl);
    buffEl.addEventListener("click", () => {
       glory.healt = Math.min(glory.healt + 30, 100)
        showHp(GloryHealth, glory)
        buffEl.remove()
        // document.body.classList.add("show-after")
        classListAddFunc(document.body, "show-after")

        setTimeout(()=>{
            classListRemoveFunc(document.body, "show-after")

        },1000)

    }, { once: true })
    console.log('123')
}, { once: true })

function killGlory(){
    if(glory.healt <= 0){
        classListAddFunc(loseIcon, "showLoseIcon")

        classListRemoveFunc(document.body, "show-bef")

        clearInterval(id)
    }
}

function showHp(el, charcter){
    el.style.width = charcter.healt + '%'
}

function classListAddFunc(el, clas){
    el.classList.add(clas)
}
function classListRemoveFunc(el, clas){
    el.classList.remove(clas)
}