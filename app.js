const todoList = document.querySelector('.todo-list')
const pensil = document.querySelector('#pencil')
const allItems = document.querySelector('.todo-items')
const userInput = document.querySelector('.userInput')

pencil.addEventListener('click', () => {
    allItems.innerHTML = ''
})

userInput.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        addItem();
    }
})

function addItem() {
    const item = document.createElement('h2')
    item.innerHTML = '-' + userInput.value

    item.addEventListener('mouseenter', () => {
        item.style.cursor = 'pointer';
    })

    item.addEventListener('mouseleave', () => {
        item.style.cursor = 'default';
    })

    item.addEventListener('click', () => {
        item.style.textDecoration = 'line-through'
    })

    allItems.insertAdjacentElement('beforeend', item)

    userInput.value = ''
}