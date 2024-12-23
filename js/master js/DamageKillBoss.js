const boss = new Boss()

dirs.bossItem.addEventListener("click", ()=>{
    if(!dirs.sword.classList.contains("attackAnim")){
        boss.damage(20)
    }
})
function damageBoss(){
    showBossHp()
}
function killBoss(){
    showBossHp()
    dirs.bossItem.remove()
    dirs.healthBoss.remove()
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
dirs.healthBossText.textContent = boss.hp
    dirs.healthBossItem.style.width = pixelstoproccents(boss.hp, 300) + "%"
}