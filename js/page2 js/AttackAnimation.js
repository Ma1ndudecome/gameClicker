import { dirs } from "../master js/dirs.js";
import {classListAddFunc, classListRemoveFunc} from "../FirstPageJs/BaseFunc.js"

dirs.mainSection.addEventListener("click", ()=>{
    classListAddFunc(dirs.sword, "attackAnim")
})
function delayAnimAttack(){
    setInterval(()=>{
        classListRemoveFunc(dirs.sword, "attackAnim")
    },900)
}
delayAnimAttack()