document.addEventListener("keydown", (e)=>{
    if(e.code === "KeyE" && dirs.buffContainer.children.length !== 0){
       dirs.buffContainer.querySelector(".buff").remove()
       audioPlay(drinkSound)
       audioPlay(healSound)
       classListAddFunc(document.body, "show-after")
       setTimeout(() => {
           classListRemoveFunc(document.body, "show-after")
       }, 1000)
       glory.addHp(30)
       dirs.GloryHealth.style.width = glory.hp + "%"
       localStorage.setItem("hpGlory", dirs.GloryHealth.style.width)
    }  
})
