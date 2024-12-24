function showsavedHp(){
    if(localStorage.length !== 0){
        const numHp = localStorage.getItem("hpGlory")
        
        glory.hp = Number(numHp.slice(0,numHp.length-1))
        dirs.hpBar.style.width = glory.hp + "%";
        dirs.hpBarText.textContent = glory.hp;
        
    }
}
showsavedHp()