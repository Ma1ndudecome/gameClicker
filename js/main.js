const devInfo = document.querySelector(".DevWindow")
const section = document.querySelector('.secti')
const showButton = document.querySelector(".dev")
const audio = document.getElementsByTagName("audio")
const startDiv = document.querySelector('.start')
const help = document.querySelector('.help')
const modalHelp = document.querySelector('.modalHelpMain')
const hightSocreModal = document.querySelector(".highscore")
const highScoreShow = document.querySelector('.highScoreMain')

startDiv.addEventListener("click", (event) => {
    startDiv.style.display = 'none'
    audio[0].play()
    audio[0].loop = true
    audio[0].volume = 0.5
})

// ! Develop
showButton.addEventListener("click", () => {
    devInfo.style.display = 'flex'
    section.style.filter = 'blur(10px)'
})

document.addEventListener("keydown", (e) => {
    if (e.key === 'q' || e.key === 'й') {
        section.style.filter = 'blur(0)'
        devInfo.style.display = 'none'
    }
})

// ! Help
help.addEventListener('click', (e) => {
    modalHelp.style.display = 'flex'
    section.style.filter = 'blur(10px)'
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'q' || e.key === 'й') {
        section.style.filter = 'blur(0)'
        modalHelp.style.display = 'none'
    }
})
modalHelp.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        section.style.filter = 'blur(0)'
        modalHelp.style.display = 'none'
    }
})

// ! High Score
hightSocreModal.addEventListener('click', (e) => {
    highScoreShow.style.display = 'flex'
    section.style.filter = 'blur(10px)'
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'q' || e.key === 'й') {
        section.style.filter = 'blur(0)'
        highScoreShow.style.display = 'none'
    }
})
highScoreShow.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        section.style.filter = 'blur(0)'
        highScoreShow.style.display = 'none'
    }

})

