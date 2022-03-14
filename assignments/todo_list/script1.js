const compBtn = document.querySelector('button#comp');
const pendBtn = document.querySelector('button#pend');
const allTask = document.querySelector('button#all');
const todoList = document.querySelector('div.todos');
fetchtodo();
async function fetchtodo(){
    let res=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await res.json();
    allTask.addEventListener("click", () => {
        loadItems(data);
        });
    compBtn.addEventListener("click", () => {
        let completedTodoList = data.filter(ele => ele.completed);
        loadItems(completedTodoList);
    });
    pendBtn.addEventListener("click", () => {
        let pendingTodoList = data.filter(ele => !ele.completed);
        loadItems(pendingTodoList);
    });
}
function loadItems(data){
        let output='';
    data.forEach((todo) => {
        let trig
        if (todo.completed) {
            trig = "Completed"
        }
        else {
            trig = "Pending"
        }
        output+=`<div class="whole_value">
                <h4>${todo.title}</h4>
                <p >UserId : ${todo.userId}</p>
                <p >ID : ${todo.id}</p>
                <p >Status : ${trig}</p>
                </div>`
}); todoList.innerHTML=output;}