dirs.mainSection.addEventListener("click", ()=>{
    classListAddFunc(dirs.sword, "attackAnim")
})

function delayAnimAttack(){
    setInterval(()=>{
    classListRemoveFunc(dirs.sword, "attackAnim")
    },800)
}
delayAnimAttack()