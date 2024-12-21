
function spawnNewBuff(){
    if(dirs.buffContainer.children.length !== 0){
        return
    }
    insertBuffEl()
    BuffFunction()
}

function insertBuffEl(){
    dirs.buffContainer.insertAdjacentHTML("afterbegin", createBuffMarking())
    localStorage.setItem("potion", createBuffMarking())
    dirs.counterBuff += 1
    localStorage.setItem("counterBuff", dirs.counterBuff)

}

function createBuffMarking(){
    return`<div class="buff"><img src="../img/buff.gif" alt="" class="buffEl"></div>
    `
}


warrior.dieObs.subscribe(spawnNewBuff)