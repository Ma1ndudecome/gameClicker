import { help } from "./const.js";
import { modalHelp } from "./const.js";
import { section } from "./const.js";

export function helpus() {
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
}