let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

for(let i = 0; i < 5; i++){

    let li = document.createElement(`li`);
    li.innerHTML = tasks[i]
    let ol = document.querySelector(`#todo-list`)
    ol.append(li);
};