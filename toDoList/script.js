const inputField = document.getElementById('inputField');
const tasksContainer = document.getElementById('tasksContainer');
var tasks = [];
inputField.onkeydown = function(event){
    if(event.keyCode === 13){
        addTask();
    }
}
function addTask(){
    let newTask = {
        done : false,
        value : inputField.value
    }
    if(inputField.value == ""){
        return;
    }
    if(tasks.find(element => element.value == inputField.value)==undefined) 
        tasks.push(newTask);
    clearField();
    displayTasks();
}
function clearField(){
    inputField.value = "";
}
function displayTasks(){
    tasksContainer.innerHTML = "";
    tasks.forEach(element => {
        const task = document.createElement("div");
        task.classList.add("taskDiv");
        task.id = tasks.indexOf(element);
        task.addEventListener("contextmenu",(e) => {
            e.preventDefault();
            tasks.splice(task.id, 1);
            displayTasks();
        });
        task.addEventListener("click",(e) => { 
            if(element.done===false){
                element.done = true;
            }
            else {
                element.done = false;
            }  
            displayTasks(); 
               
        });
        if(element.done == true){
            task.classList.add("text-decoration-line-through")
        }
        task.innerHTML = 
        `${element.value}`;
        tasksContainer.appendChild(task);   
    });
}
