import { dirs } from "./dirs.js";
import { classListAddFunc, classListRemoveFunc } from "./BaseFunc.js";
import { addToInventorySavedItem } from "./SaveInventory.js";
export function addClassListToInvetory(){
    dirs.invAdd.forEach(el=> classListAddFunc(el, "free"))
    if(localStorage.getItem("masIndex")){
        const a = `<div class="buff"><img src="../img/buff.gif" alt="" class="buffEl"></div>`
        dirs.indexMas.forEach(el=> classListRemoveFunc(dirs.invAdd[el], "free"))
        addToInventorySavedItem()
    }
    
}