function healGlory(){
    glory.addHp(20)
    dirs.hpBar.style.width = glory.hp + "%";
    dirs.hpBarText.textContent = glory.hp;
}