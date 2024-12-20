dirs.container.addEventListener("click", ()=>{
    classListAddFunc(dirs.imgSword, "attack")
   if(dirs.imgSword.classList.contains("attack")){
    audioHit.play()
   }
    
})

setInterval(()=>{
    classListRemoveFunc(dirs.imgSword, "attack")
    
}, 1300)

