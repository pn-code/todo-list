import taskFactory from "./tasks";
import "./style.css"

function generateDOM () {
    const tasksArr = [];

    // Content Containers
    const todoContainer = document.getElementById("todo-container")

    // INPUTS
    const inputTask = document.getElementById("task-input")
    const inputDate = document.getElementById("date-input");
    const inputPriority = document.getElementById("priority-input");

    // add button
    const addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", () => {
        // creates task via factory function
        if ( inputTask.value !== "" ) {
            const newTask = taskFactory( inputTask.value, inputDate.value, inputPriority.value );
            tasksArr.push(newTask.info());  // pushes to tasksArr
            todoContainer.innerText = "";   // clears content before loading tasksArr
            inputTask.value = ""
            inputDate.value = ""
        } else {
            alert("Please fill out all inputs.")
        }
        renderTodos();
    })

    function renderTodos (){
        tasksArr.map( item => { 
            const taskItem = document.createElement("li");
            taskItem.innerText = item;
            taskItem.className = "task-item";
            todoContainer.append(taskItem);

            //remove button
            const removeBtn = document.createElement("button");
            removeBtn.innerText = "X";
            removeBtn.className = "remove-btn";
            taskItem.append(removeBtn)

            //remove button functionality:
            removeBtn.addEventListener("click", () => {
                tasksArr.splice(tasksArr.indexOf(item), 1);
                taskItem.remove()
            })

            //edit button
            const editBtn = document.createElement("button")
            editBtn.innerText = "EDIT"
            editBtn.className = "edit-btn";
            taskItem.append(editBtn)

            //edit button functionality
            editBtn.addEventListener("click", () => {
                // create an input 
                const editInput = document.createElement("input");
                editInput.value = tasksArr.slice(tasksArr.indexOf(item), 1);
                const saveBtn = document.createElement("button");
                saveBtn.innerText = "SAVE" ;
                taskItem.replaceWith(editInput, saveBtn)

                saveBtn.addEventListener("click", () => {
                    tasksArr.splice(tasksArr.indexOf(item), 1, editInput.value)
                    editInput.remove();
                    saveBtn.remove();
                    renderTodos();
                })
            })
        });
    }    
};

generateDOM ();