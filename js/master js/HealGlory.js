function healGlory(){
    glory.addHp(20)
    styleHpBarWidth(dirs.hpBar, glory.hp)
    // dirs.hpBar.style.width = glory.hp + "%";
    // dirs.hpBarText.textContent = glory.hp;
    styleHpBarTextContent(dirs.hpBarText, glory.hp)
    classListAddFunc(document.body, "showAfter")
    setTimeout(()=>{
        classListRemoveFunc(document.body, "showAfter")
    },500)
}