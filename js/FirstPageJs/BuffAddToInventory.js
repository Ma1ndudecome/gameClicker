import { healWarrior } from "./HealWarrior.js";
import { dirs } from "./dirs.js";
import { classListAddFunc, classListRemoveFunc } from "./BaseFunc.js";
import { createBuffMarking } from "./spawnBuff.js";
export function buffFunction(){
    dirs.buffContainer.querySelector(".buff").addEventListener("click", buffAddToInventory, {once:true})
}

function buffAddToInventory(e){
    dirs.counterBuff += 1

    for(let i =0; i < dirs.invAdd.length; i+=1){
        if(dirs.invAdd[i].classList.contains("free")){
            classListAddFunc(dirs.buffContainer.querySelector(".buff"), "toInv")
            classListRemoveFunc(dirs.invAdd[i], 'free')
            dirs.invAdd[i].append(e.target.parentNode)
            dirs.invAdd[i].querySelector(".buff").addEventListener("click", buffAddHealt, {once:true})
            dirs.counterInventroy = i
            break
        }
    }
    localStorage.setItem("buffMarking", createBuffMarking())
    localStorage.setItem("counterBuff", dirs.counterBuff)
}

function buffAddHealt(e){
    e.currentTarget.parentNode.classList.add("free")
    e.currentTarget.remove()
    dirs.counterBuff -= 1
    localStorage.setItem("counterBuff", dirs.counterBuff)

    healWarrior()
}