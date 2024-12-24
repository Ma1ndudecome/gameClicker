function showsavedHp(){
    if(localStorage.length !== 0){
        const numHp = localStorage.getItem("hpGlory")
        
        glory.hp = Number(numHp.slice(0,numHp.length-1))
        styleHpBarWidth(dirs.hpBar, glory.hp)
        // dirs.hpBar.style.width = glory.hp + "%";
        // dirs.hpBarText.textContent = glory.hp;
        styleHpBarTextContent(dirs.hpBarText, glory.hp)
        

        // if(boss.Alive === "false"){
        //     dirs.bossContainer.remove()
        // }
    }
}
showsavedHp()