const devInfo = document.querySelector(".DevWindow")
const section = document.querySelector('.secti')
const showButton = document.querySelector(".dev")
const audio = document.getElementsByTagName("audio")
const startDiv = document.querySelector('.start')
const modalHelp = document.querySelector(".modalHelp")
const helpButton = document.querySelector(".helpButton")
startDiv.addEventListener("click", (event) =>{
    startDiv.style.display = 'none'
    // audio[0].play()
    audio[0].loop = true
})

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
helpButton.addEventListener("click", (e)=>{
    e.preventDefault()
    modalHelp.classList.add("showModalHelp")
   
})
modalHelp.addEventListener("click", (e)=>{
    if(e.target === e.currentTarget){
        modalHelp.classList.remove("showModalHelp")
    }

})


