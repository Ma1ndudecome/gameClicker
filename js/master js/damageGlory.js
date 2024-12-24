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
        glory.damage(20);
        dirs.hpBar.style.width = glory.hp + "%";
        dirs.hpBarText.textContent = glory.hp;
    }, 1900)
}

function killGlory(){
    clearTimeout(dirs.intervalId)
    clearInterval(dirs.spawnInterval)
    dirs.loseIcon.classList.add("showLoseIcon")
}
glory.damage(0)

