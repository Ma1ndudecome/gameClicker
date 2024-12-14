document.body.addEventListener('keydown', (event) =>{
    if (event.ctrlKey) {
        event.ctrlKey = alert('Idi Naxyu')
    }
})

const DevButton = document.querySelector('.dev')
const Book = document.querySelector('.DevWindow')

DevButton.addEventListener('click', (event) =>{
    Book.style.display = 'grid'
    console.log(event.target);
    
})

document.addEventListener('keydown', (event) =>{
    if (event.key === 'q') {
        Book.style.display = 'none'
    } 
})