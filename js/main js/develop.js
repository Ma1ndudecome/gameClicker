import { devInfo } from "./const.js";
import { section } from "./const.js";
import { showButton } from "./const.js";

export function devel() {
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
}