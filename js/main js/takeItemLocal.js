import { dirs } from "./const.js"
function takeFromLocalStorage(){
   
    const masLocalItem = [
        {
            key:"highestScore",
            do:value=>{
                dirs.hightScoreItems.textContent = value
            }
        },
    ]
    masLocalItem.forEach(el=>{
        const value = localStorage.getItem(el.key)
        if(value !== null){
            el.do(value)
        }
    })

}
takeFromLocalStorage()
console.log('213')