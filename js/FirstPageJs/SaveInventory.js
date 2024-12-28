import { dirs } from "./dirs.js";
import { createBuffMarking } from "./spawnBuff.js";
import { classListAddFunc } from "./BaseFunc.js";
import { buffAddHealt } from "./BuffAddToInventory.js";
export function addToInventorySavedItem(){
    dirs.invAdd.forEach((el,i)=>{
        if(!el.classList.contains("free")){
            dirs.invAdd[i].insertAdjacentHTML("beforeend", createBuffMarking())
            classListAddFunc(dirs.invAdd[i].querySelector('.buff'), "toInv")
            dirs.invAdd[i].querySelector('.buff').addEventListener("click", buffAddHealt, {once:true})
        }
    })
}