function BuffFunction(){
    dirs.buffContainer.querySelector(".buff").addEventListener("click",BuffAddToInventory,{once:true})
    dirs.buffContainer.querySelector(".buff").style.left = dirs.randomPosition + "%"
 }
 
 function BuffAddToInventory(e){
     dirs.counterBuff += 1
     localStorage.setItem("counterBuff", dirs.counterBuff)
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
     dirs.counterBuff -= 1
     localStorage.setItem("counterBuff", dirs.counterBuff)
     healWarrior()
 }
 
 
 
 function healWarrior(){
     audioPlay(drinkSound)
     audioPlay(healSound)
     classListAddFunc(document.body, "show-after")
     setTimeout(() => {
         classListRemoveFunc(document.body, "show-after")
     }, 1000)
     glory.addHp(30)
     styleHpBarWidth(dirs.GloryHealth, glory.hp)
     // dirs.GloryHealth.style.width = glory.hp + "%"
     localStorage.setItem("hpGlory", dirs.GloryHealth.style.width)
 }
