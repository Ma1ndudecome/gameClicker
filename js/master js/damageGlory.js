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
        console.log(glory.hp);
        glory.damage(1);
        dirs.hpBar.style.width = glory.hp + "%";
        dirs.hpBarText.textContent = glory.hp;
        document.body.classList.add('showBef')
       setTimeout(()=>{
        document.body.classList.remove('showBef')
        },1000)
    }, 3000)
}

function killGlory(){
    clearTimeout(dirs.intervalId)
    clearInterval(dirs.spawnInterval)
    dirs.loseIcon.classList.add("showLoseIcon")
}
glory.damage(0)

