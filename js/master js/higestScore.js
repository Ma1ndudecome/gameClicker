import { dirs } from "./dirs.js";

export function scores() {
    if (dirs.scoreEl <= dirs.higestScore) {
        return
    }
    dirs.higestScore += 45
    localStorage.setItem("highestScore", dirs.higestScore)
}