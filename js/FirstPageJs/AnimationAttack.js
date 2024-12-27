import { dirs } from "./dirs.js";

import { classListAddFunc, classListRemoveFunc } from "./BaseFunc.js";

export function addAnimToSword(){
    dirs.container.addEventListener("click", ()=>{
        classListAddFunc(dirs.imgSword, "attack")
        
    })
   
}

export function removeStyleToSword(){
    setInterval(()=>{
        classListRemoveFunc(dirs.imgSword, "attack")
    },900)
}

