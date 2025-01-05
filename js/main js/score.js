import { highScoreShow } from "./const.js";
import { hightSocreModal } from "./const.js";
import { section } from "./const.js";

export function scorus() {
    hightSocreModal.addEventListener('click', () => {
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
}