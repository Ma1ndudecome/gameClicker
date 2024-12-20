function BuffFunction(){
   dirs.buffContainer.querySelector(".buff").addEventListener("click",BuffAddToInventory,{once:true})
   dirs.buffContainer.querySelector(".buff").style.left = dirs.randomPosition + "%"
}

function BuffAddToInventory(e){
    console.log(e.target.parentNode)
    console.log('123')
    for(let i=0; i < dirs.invAdd.length; i += 1){
        if(dirs.invAdd[i].classList.contains("free")){
            classListAddFunc(dirs.buffContainer.querySelector(".buff"), "toInv")
            dirs.invAdd[i].classList.remove("free")
            dirs.invAdd[i].append(e.target.parentNode)
            dirs.invAdd[i].querySelector(".buff").addEventListener("click", BuffAddHealt,{once:true})
            dirs.counterInventroy = i
            break
        }
    }
}


function BuffAddHealt(e){
    e.currentTarget.parentNode.classList.add("free")
    e.currentTarget.remove()
    drinkSound.play()
    healSound.play()
    classListAddFunc(document.body, "show-after")
    setTimeout(() => {
        classListRemoveFunc(document.body, "show-after")
    }, 1000)
    glory.addHp(30)
    dirs.GloryHealth.style.width = glory.hp + "%"
}

