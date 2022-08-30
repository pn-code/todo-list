import taskFactory from "./tasks";

export default
function generateDOM(){

const tasksArr = [];

const body = document.querySelector("body")

const content = document.createElement("div");
body.append(content);

const contentTitle = document.createElement("h1")
contentTitle.innerText = "To-Do List"
content.append(contentTitle);

//Content Containers

const inputContainer = document.createElement("div");
content.append(inputContainer);

const todoContainer = document.createElement("ul");
content.append(todoContainer);

//INPUTS
const labelTask = document.createElement("label");
labelTask.innerText = "Task: ";
inputContainer.append(labelTask);

const inputTask = document.createElement("input");
inputContainer.append(inputTask);

const labelDueDate = document.createElement("label");
labelDueDate.innerText = "Due Date: ";
inputContainer.append(labelDueDate);

const inputDueDate = document.createElement("input");
inputDueDate.type = "date";
inputDueDate.placeholder = "due date";
inputContainer.append(inputDueDate);

//select options
const labelPriority = document.createElement("label");
labelPriority.innerText = "Priority: ";
inputContainer.append(labelPriority);

const inputPriority = document.createElement("select");
inputPriority.placeholder = "priority";
inputContainer.append(inputPriority);

const inputPriorityHigh = document.createElement("option");
inputPriorityHigh.innerText = "HIGH";
inputPriority.append(inputPriorityHigh);

const inputPriorityMedium = document.createElement("option");
inputPriorityMedium.innerText = "MEDIUM";
inputPriority.append(inputPriorityMedium);

const inputPriorityLow = document.createElement("option");
inputPriorityLow.innerText = "LOW";
inputPriority.append(inputPriorityLow);


//add button

const addBtn = document.createElement("button");
addBtn.innerText = "ADD";
inputContainer.append(addBtn);

//add button functionality:

addBtn.addEventListener("click", () => {

    //creates task via factory function
    const newTask = 
        taskFactory(inputTask.value, inputDueDate.value, inputPriority.value);

    //pushes to tasksArr
    tasksArr.push(newTask.info()); 

    //clears content before loading tasksArr
    todoContainer.innerText = ""; 

    // displays tasksArr as list
    tasksArr.map((item) => { 
        const taskItem = document.createElement("li");
        taskItem.innerText = item;
        todoContainer.append(taskItem);

        //remove button
        const removeBtn = document.createElement("button")
        removeBtn.innerText = "X"
        taskItem.append(removeBtn)

        //remove button functionality:
        removeBtn.addEventListener("click", () => {
            //remove from array
            tasksArr.splice(
            tasksArr.indexOf(item), 1
            );
            //remove from display
            taskItem.innerText = "";

        })

        //edit button
        const editBtn = document.createElement("button")
        editBtn.innerText = "EDIT"
        taskItem.append(editBtn)

        //edit button functionality

    });
})

};

