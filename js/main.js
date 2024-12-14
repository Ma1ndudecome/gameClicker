const devInfo = document.querySelector(".DevWindow")

const showButton = document.querySelector(".dev")

showButton.addEventListener("click", ()=>{
    devInfo.style.display = 'flex'
})

window.addEventListener("keydown", (e)=>{
    if(e.key === 'q'){
        devInfo.style.display = 'none'
    }
})