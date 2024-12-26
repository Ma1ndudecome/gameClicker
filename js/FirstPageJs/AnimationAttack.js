dirs.container.addEventListener("click", ()=>{
    classListAddFunc(dirs.imgSword, "attack")
   if(dirs.imgSword.classList.contains("attack")){
    
   }
    
})

setInterval(()=>{
    classListRemoveFunc(dirs.imgSword, "attack")
    
}, 900)
