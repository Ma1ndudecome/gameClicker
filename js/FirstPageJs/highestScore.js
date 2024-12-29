import { dirs } from "./dirs.js";
export function scores(){
    console.log(dirs.score)
    console.log(dirs.higestScore)

    if(dirs.score <= dirs.higestScore){
        return
    }
    dirs.higestScore += 38
    localStorage.setItem("highestScore", dirs.higestScore)
}