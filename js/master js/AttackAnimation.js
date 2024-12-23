dirs.mainSection.addEventListener("click", ()=>{
    classListAddFunc(dirs.sword, "attackAnim")
})

function delayAnimAttack(){
    setInterval(()=>{
    classListRemoveFunc(dirs.sword, "attackAnim")
    classListRemoveFunc(dirs.bossItem, "damage")

    },800)
}
delayAnimAttack()