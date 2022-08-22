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

//inputs
const inputTask = document.createElement("input");
inputTask.placeholder = "task";
inputContainer.append(inputTask);

const inputDueDate = document.createElement("input");
inputDueDate.placeholder = "due date";
inputContainer.append(inputDueDate);

const inputPriority = document.createElement("input");
inputPriority.placeholder = "priority";
inputContainer.append(inputPriority);

//add button

const addBtn = document.createElement("button");
addBtn.innerText = "ADD";
inputContainer.append(addBtn);

//add button functionality:

addBtn.addEventListener("click", () => {
    const newTask = //creates task via factory function
        taskFactory(inputTask.value, inputDueDate.value, inputPriority.value);
    tasksArr.push(newTask.info()); //pushes to tasksArr
    todoContainer.innerText = ""; //clears content before loading tasksArr
    tasksArr.map((item) => { // displays tasksArr as list
        const taskItem = document.createElement("li");
        taskItem.innerText = item;
        todoContainer.append(taskItem);

        const removeBtn = document.createElement("button")
        removeBtn.innerText = "X"
        taskItem.append(removeBtn)

        removeBtn.addEventListener("click", () => {
            //remove from array
            tasksArr.splice(
            tasksArr.indexOf(item), 1
            );
            //remove from display
            taskItem.innerText = "";

        })
    });
})

};

