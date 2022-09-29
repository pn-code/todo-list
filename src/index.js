import taskFactory from "./tasks";

export default function generateDOM() {
    const tasksArr = [];

    // Content Containers
    const todoContainer = document.getElementById("todo-container")

    // INPUTS
    const inputTask = document.getElementById("task-input")
    const inputDate = document.getElementById("date-input");
    const inputPriority = document.getElementById("priority-input");

    // add button
    const addBtn = document.getElementById("add-btn");

    // add button functionality:
    addBtn.addEventListener("click", () => {
        // creates task via factory function
        if ( inputTask.value !== "" ){
            const newTask = taskFactory( inputTask.value, inputDate.value, inputPriority.value );
            tasksArr.push(newTask.info());  // pushes to tasksArr
            todoContainer.innerText = "";   // clears content before loading tasksArr
            inputTask.value = ""
            inputDate.value = ""
        } else {
            alert("Please enter a valid task.")
        }

        // displays tasksArr as list
        tasksArr.map( item => { 
            const taskItem = document.createElement("li");
            taskItem.innerText = item;
            todoContainer.append(taskItem);

            //remove button
            const removeBtn = document.createElement("button")
            removeBtn.innerText = "X"
            taskItem.append(removeBtn)

            //remove button functionality:
            removeBtn.addEventListener("click", () => {
                tasksArr.splice(tasksArr.indexOf(item), 1);
                taskItem.remove()
            })

            //edit button
            const editBtn = document.createElement("button")
            editBtn.innerText = "EDIT"
            taskItem.append(editBtn)

            //edit button functionality
            editBtn.addEventListener("click", () => {
                console.log(tasksArr)
            })
        });
    })

};