import { dirs } from "./dirs"
import { classListAddFunc, classListRemoveFunc } from "./BaseFunc"
dirs.container.addEventListener("click", ()=>{
    classListAddFunc(dirs.imgSword, "attack")
   if(dirs.imgSword.classList.contains("attack")){
    
   }
    
})

setInterval(()=>{
    classListRemoveFunc(dirs.imgSword, "attack")
    
}, 900)

