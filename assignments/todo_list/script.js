const newTodoInput = document.querySelector('input');
const addTodoBtn = document.querySelector('button');
const todolist = document.querySelector('div.todos');
let count = 0;
addTodoBtn.onclick = function(){
    var input = newTodoInput.value;
    if(input.length === 0) {
    alert("Please enter a task");
    } else {
    let p = document.createElement("p")
    p.setAttribute("key",count)
    p.innerHTML = input
    todolist.appendChild(p)
    document.querySelector(`p[key="${count}"]`).addEventListener('click',function(){
        todolist.removeChild(this)
    })
    count++;
    }
}



