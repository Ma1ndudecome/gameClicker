function spawnBuff(){
    let randomPositionX = Math.floor(Math.random()*70)
    let randomPositionY = Math.floor(Math.random()*70)

    document.body.insertAdjacentHTML("afterbegin", markingBuff())
    const buff = document.body.querySelector(".buff")
   
    buff.style.left = randomPositionX + '%'
    buff.style.top = randomPositionY + '%'

    buff.addEventListener("click", (e)=>{
        e.target.remove()
        healGlory()
    },{once:true})
    
    setTimeout(()=>{
        buff.remove()
    },5000)
}




function spawn(){
    dirs.spawnInterval = setInterval(()=>{
        spawnBuff()
    },6000)
}

spawn()