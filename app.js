
var list = document.querySelector('.todo-list ul')
list.addEventListener('click', function(e){
    if(e.target.className == 'del'){
        const li = e.target.parentElement
        list.removeChild(li)
    }
})

var add = document.forms['add-list']
add.addEventListener('submit', function(e){
    e.preventDefault()
    const value = add.querySelector('input[type="text"]').value

    const li = document.createElement('li')
    const name = document.createElement('span')
    const del = document.createElement('span')

    del.textContent = 'Done!'
    name.textContent = value

    del.classList.add('del')
    name.classList.add('name')

    li.appendChild(name)
    li.appendChild(del)
    list.appendChild(li)

})

// var search = document.forms['search-box'].querySelector('input')
// search.addEventListener('keyup', function(e){
//     const term = e.target.value.toLowerCase()
//     const todolist = list.getElementsByTagName('li')
//     Array.from(todolist).forEach(function(lists){
//         const title = lists.
//     })
// })