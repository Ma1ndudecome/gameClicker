import { startDiv } from "./const.js";
import { audio } from "./const.js";

export function start() {
    startDiv.addEventListener("click", () => {
        startDiv.style.display = 'none'
        audio[0].play()
        audio[0].loop = true
        audio[0].volume = 0.5
    })
}
