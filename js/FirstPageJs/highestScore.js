import { dirs } from "./dirs.js";
export function scores(){

    if(dirs.score <= dirs.higestScore){
        return
    }
    dirs.higestScore += 38
    localStorage.setItem("highestScore", dirs.higestScore)
}