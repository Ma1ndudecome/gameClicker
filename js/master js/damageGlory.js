const glory = new Glory()
glory.obsHp.subscribe((e) => {
    if (e === "damage") {
        damageGlory()
    } else if (e === "kill") {
        killGlory()
    }
})
function damageGlory() {
    dirs.intervalId = setTimeout(() => {
        glory.damage(1);
        styleHpBarWidth(dirs.hpBar, glory.hp)
        // dirs.hpBar.style.width = glory.hp + "%";
        styleHpBarTextContent(dirs.hpBarText, glory.hp)
        // dirs.hpBarText.textContent = glory.hp;
        classListAddFunc(document.body, "showBef")
        // document.body.classList.add('showBef')
       setTimeout(()=>{
        classListRemoveFunc(document.body, "showBef")

        // document.body.classList.remove('showBef')
        },1000)
    }, 3000)
}

function killGlory(){
    clearTimeout(dirs.intervalId)
    clearInterval(dirs.spawnInterval)
    classListAddFunc(dirs.loseIcon, "showLoseIcon")
    // dirs.loseIcon.classList.add("showLoseIcon")
}
glory.damage(0)

