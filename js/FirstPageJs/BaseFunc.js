//Function AddClass
export function classListAddFunc(el, clas) {
    el.classList.add(clas)
}

//Function RemoveClass

export function classListRemoveFunc(el, clas){
    el.classList.remove(clas)
}

export function styleHpBarWidth(el, item){
    el.style.width = item + "%"
}

export function styleHpBarTextContent(el, item){
    el.textContent = item
}