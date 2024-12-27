import { dirs } from "./dirs.js"
import { buffFunction } from "./BuffAddToInventory.js"
export function spawnNewBuff(){
    if(dirs.buffContainer.children.length !== 0){
        return
    }
    insertBuffEl()
    buffFunction()
    
}

function insertBuffEl(){
    dirs.buffContainer.insertAdjacentHTML("afterbegin", createBuffMarking())
}

export function createBuffMarking(){
    return `<div class="buff"><img src="../img/buff.gif" alt="" class="buffEl"></div>`
}