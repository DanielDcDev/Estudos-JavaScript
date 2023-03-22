;(function(){
'use strict'
//armazenar o DOM em variaveis    
const itemInput = document.getElementById('item-input');
const toDoAddForm = document.getElementById('todo-add');
const ul = document.getElementById('todo-list');
//const toDoItem = document.getElementsByTagName('li');

    toDoAddForm.addEventListener("submit",AddLi);
    

        let arrTasks = [
            {
                name:"task 1",
                createAt:Date.now(),
                completed: false
            }
        ];

            function genereteLiTask(obj){
                const li = document.createElement("li");
                const p = document.createElement("p");
                const checkButton = document.createElement("button");
                const editButton = document.createElement("i");
                const deleteButton = document.createElement("i");
                const containerEdit = document.createElement("div");
                const inputEdit = document.createElement("input");
                const containerEditButton = document.createElement("button");
                const containerCancelButton = document.createElement("button");
                
                li.className = "todo-item";
                checkButton.className = "button-check";
                checkButton.innerHTML = '<i class="fas fa-check displayNone"></i>';
                containerEdit.className = "editContainer";
                inputEdit.setAttribute("type", "text");
                inputEdit.className ="editInput";
                containerEditButton.className = "editButton";
                containerEditButton.textContent = "Edit";
                containerCancelButton.className = "cancelButton";
                containerCancelButton.textContent ="Cancel";
                
                

                li.appendChild(checkButton);
                containerEdit.appendChild(inputEdit);
                containerEdit.appendChild(containerEditButton);
                containerEdit.appendChild(containerCancelButton);

                li.appendChild(containerEdit);
                

                p.className = "task-name";
                p.textContent = obj.name;
                li.appendChild(p);

                editButton .className="fas fa-edit";
                li.appendChild(editButton);
                deleteButton.className = "fas fa-trash-alt";
                li.appendChild(deleteButton)

                
                addEventLi(li);

                return li;
            }
            function renderTasks(){
                ul.innerHTML = "";
                arrTasks.forEach(taskObj =>{
                    ul.appendChild(genereteLiTask(taskObj));
                    })
            }
            function AddLi(e){
                e.preventDefault()
                console.log(itemInput.value);
                addTask(itemInput.value);
                renderTasks();
                itemInput.value = "";
                itemInput.focus();
            }
            function addEventLi(li){
                li.addEventListener("click", function(){
                console.log(this);
            })
            }
            function addTask(task){
                arrTasks.push({
                name: task,
                createAt:Date.now(),
                completed: false
                })
            }
    

renderTasks();
})()

