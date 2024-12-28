const boss = new Boss()



boss.Alive = localStorage.getItem("aliveBoss")

dirs.bossItem.addEventListener("click", ()=>{
    if(!dirs.sword.classList.contains("attackAnim")){
        boss.damage(20)
    }
})
function damageBoss(){
    showBossHp()
    classListAddFunc(dirs.bossItem, "damage")
}
function killBoss(){
    showBossHp()
    classListAddFunc(dirs.bossContainer, "dieBoss")
    // dirs.bossContainer.classList.add("dieBoss")
    setTimeout(() => {
        dirs.bossItem.remove()
        dirs.healthBoss.remove()
    }, 2000);
    clearTimeout(dirs.intervalId)
    clearTimeout(dirs.spawnInterval)
    localStorage.setItem("hpGlory", dirs.hpBar.style.width)
    localStorage.setItem("aliveBoss", boss.Alive)

}
boss.hpObs.subscribe((event)=>{
    if(event === "damage"){
        damageBoss()
    }else if(event === "kill"){
        killBoss()
    }
})


function pixelstoproccents(num1Px, num2){
    num1Px = (num1Px/num2)*100
    return num1Px.toFixed(0)
}

function showBossHp(){
    styleHpBarTextContent(dirs.healthBossText, boss.hp)
    styleHpBarWidth(dirs.healthBossItem, pixelstoproccents(boss.hp, 300))
    // dirs.healthBossText.textContent = boss.hp
    // dirs.healthBossItem.style.width = pixelstoproccents(boss.hp, 300) + "%"
    
}