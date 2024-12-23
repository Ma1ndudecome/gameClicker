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
        glory.damage(11);
        dirs.hpBar.style.width = glory.hp + "%";
        dirs.hpBarText.textContent = glory.hp;
    }, 1900)
}

function killGlory(){
    clearTimeout(dirs.intervalId)
}
glory.damage(1)

