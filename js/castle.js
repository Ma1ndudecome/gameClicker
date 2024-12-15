
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
        if (this.healt - 15 < 0) {
            this.healt = 0
            this.isAlive = false
            return
        }
        this.healt -= 10
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name)
    }
    damage(elDelete) {
        if (!imgSword.classList.contains("attack")) {
            this.healt -= 30
        }
        if (this.healt <= 0) {
            this.healt = 0
            this.isAlive = false
            this.die(elDelete)
            return
        }

    }
    die(elToDel) {
        elToDel.remove()
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
const invAdd = document.querySelectorAll(".block")
let score = document.querySelector(".ScoreItem") 
const container = document.querySelector(".container")
const loseIcon = document.querySelector(".lose")
const spawnWarrior = document.querySelector(".spawn-warrior")
const buffContainer = document.querySelector(".buff-container")
let id;
let counterWarrior = 0;


function damageGlory() {
    id = setInterval(() => {
        glory.damage()
        showHp(GloryHealth, glory)
        classListAddFunc(document.body, "show-bef")
        document.body.classList.toggle("show-after-more")
        killGlory()

    }, 1500)

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

warrior.addEventListener("click", () => {
    createDamageWarrior(warriroHealt, warriors, warriorContainer)
})

let counterInventory = 0
let position = 0
function createDamageWarrior(warrior, character, deleteItem) {

    character.damage(deleteItem)
    if (!character.isAlive) {
        incraseScore()
        counterWarrior += 1
        if (counterWarrior === 4) {
            clearInterval(id)
            classListRemoveFunc(document.body, "show-bef")
            classListRemoveFunc(document.body, "show-after-more")
            return
        }
        clearInterval(id)
        damageGlory()

        createNewCharacter()

        createBuffElement()
        if (createBuffElement) {
            const buffEl = buffContainer.querySelector(".buffEl")
            const buff = buffContainer.querySelector(".buff")
            counterInventory += 1
            buff.style.left = position
            buffEl.addEventListener("click", () => {

                invAdd[counterInventory - 1].append(buffEl)

                buffEl.addEventListener("click", () => {
                    glory.healt = Math.min(glory.healt + 30, 100)
                    showHp(GloryHealth, glory)
                    counterInventory -= 1
                    buffEl.remove()
                    classListAddFunc(document.body, "show-after")
                    setTimeout(() => {
                        classListRemoveFunc(document.body, "show-after")

                    }, 1000)
                }, { once: true })
            }, { once: true })
        }

        return
    }
    showHp(warrior, character)

}
function killGlory() {
    if (glory.healt <= 0) {
        classListAddFunc(loseIcon, "showLoseIcon")

        classListRemoveFunc(document.body, "show-bef")

        classListRemoveFunc(document.body, "show-after-more")

        clearInterval(id)
    }
}

function showHp(el, charcter) {
    el.style.width = charcter.healt + '%'
}

function classListAddFunc(el, clas) {
    el.classList.add(clas)
}
function classListRemoveFunc(el, clas) {
    el.classList.remove(clas)
}

function createNewCharacter() {
    const zalman = new Warrior("Zalman");
    spawnWarrior.insertAdjacentHTML("afterbegin", createMarkingForWarrior())
    const newWarrior = spawnWarrior.querySelector(".warrior")
    const helthWarr = document.querySelector(".health-warrior-item")
    const warriorDude = document.querySelector(".warriorDude")
    const NewwarriroHealt = document.querySelector(".health-warrior-item")
    position = Math.floor(Math.random() * 40) + '%'
    newWarrior.style.left = position
    showHp(helthWarr, zalman)

    warriorDude.addEventListener("click", () => {
        createDamageWarrior(NewwarriroHealt, zalman, newWarrior)

    })


}

function createMarkingForWarrior() {
    return `
     <div class="warrior">
            <div class="health-warrior">
                <div class="health-warrior-item"></div>
            </div>
    <img src="../img/secondWarrior-unscreen.gif" alt="" class="warriorDude">
    `
}
function createBuffElement() {
    buffContainer.insertAdjacentHTML("afterbegin", createBuffMarking())
    return true
}
function createBuffMarking() {
    return `
    <div class="buff">
        <img src="../img/buff.gif" alt="" class="buffEl">
    </div>
    `
}
let scoreCounter = 0
function incraseScore(){
  scoreCounter += 40
  score.textContent = scoreCounter
}