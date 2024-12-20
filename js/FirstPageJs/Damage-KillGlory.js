const glory = new Glory()

function killGlory(){
    clearInterval(dirs.id)
    classListAddFunc(dirs.loseIcon, "showLoseIcon")
}


function damageGlory(){
    dirs.id = setTimeout(()=>{
        classListAddFunc(document.body, "show-bef")
        document.body.classList.toggle("show-after-more")
        glory.damage(1)
        dirs.GloryHealth.style.width = glory.hp + '%'
    }, 1500)
}
glory.obsHp.subscribe((event)=>{
    if(event === "damage"){
        damageGlory()
    }else if(event === "kill"){
        killGlory()
    }
})
glory.damage(1)
