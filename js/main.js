const devInfo = document.querySelector(".DevWindow")
const section = document.querySelector('.secti')
const showButton = document.querySelector(".dev")

showButton.addEventListener("click", ()=>{
    devInfo.style.display = 'flex'
    section.style.filter = 'blur(10px)'
})

window.addEventListener("keydown", (e)=>{
    if(e.key === 'q'){
        section.style.filter = 'blur(0)'
        devInfo.style.display = 'none'
    }
})

