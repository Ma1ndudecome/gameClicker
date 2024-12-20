function createMarkingWarrior(){
    return `
    <div class="warrior">
        <div class="health-warrior">
        <div class="health-warrior-item"></div>
    </div>
    <img src="../img/secondWarrior-unscreen.gif" alt="" class="warriorDude">
    `
}
function insertWarrior(){
    dirs.spawnWarrior.insertAdjacentHTML("afterbegin", createMarkingWarrior())
}
function createWarrior(){
    insertWarrior()
    const warriors = new Warrior()
    let healt = dirs.spawnWarrior.querySelector(".health-warrior-item")
    const warriorEl = dirs.spawnWarrior.querySelector(".warriorDude")
    const containerWarrior = dirs.spawnWarrior.querySelector(".warrior")
    damageKillWarrior(warriors,healt, containerWarrior, warriors )
    clickDamage(warriorEl, warriors)
    damageWarrior(healt, warriors)
    warriors.dieObs.subscribe(spawnNewBuff)
    dirs.randomPosition = Math.floor(Math.random() * 30)
    containerWarrior.style.left = dirs.randomPosition + "%"
}