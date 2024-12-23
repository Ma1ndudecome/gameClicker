const boss = new Boss()

dirs.bossItem.addEventListener("click", ()=>{
    boss.damage(20)
})
function damageBoss(){
    dirs.healthBossText.textContent = boss.hp
    dirs.healthBossItem.style.width = pixelstoproccents(boss.hp, 300) + "%"
}
function killBoss(){
    dirs.healthBossText.textContent = boss.hp
    dirs.healthBossItem.style.width = pixelstoproccents(boss.hp, 600) + "%"

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

