import { startDiv } from "./const.js";
import { audio } from "./const.js";

export function start() {
    startDiv.addEventListener("click", () => {
        startDiv.style.display = 'none'
        audio.play()
        audio.volume = 0.5
        audio.loop = true
    })
}
