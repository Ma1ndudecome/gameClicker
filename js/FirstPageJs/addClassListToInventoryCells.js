import { dirs } from "./dirs.js";
import { classListAddFunc, classListRemoveFunc } from "./BaseFunc.js";
import { addToInventorySavedItem } from "./SaveInventory.js";
export function addClassListToInvetory(){
    dirs.invAdd.forEach(el=> classListAddFunc(el, "free"))
    if(localStorage.getItem("masIndex")){
        dirs.indexMas.forEach(el=> classListRemoveFunc(dirs.invAdd[el], "free"))
        addToInventorySavedItem()
    }
    
}