import { dirs } from "./dirs.js"
export function scores(){
    if(dirs.scoreEl <= dirs.higestScore){
        return
    }
    dirs.higestScore += 42
    localStorage.setItem("highestScore", dirs.higestScore)
}