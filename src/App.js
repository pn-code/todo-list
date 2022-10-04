import { app, database } from './firebaseConfig';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import taskFactory from "./tasks";

const todoContainer = document.getElementById("todo-container")
const inputTask = document.getElementById("task-input")
const inputDate = document.getElementById("date-input");
const inputPriority = document.getElementById("priority-input");
const addBtn = document.getElementById("add-btn");

let tasksArr;

const todoRef = collection(database, 'todos')

export async function loadTodos() {
    try {
        const todoDocs = await getDocs(todoRef);
        const todoData = todoDocs.docs.map( item => ({...item.data(), id: item.id }));
        tasksArr = todoData;
        render(tasksArr)
        console.log(`Loaded todos successfully: ${tasksArr}`)
    } catch(error) {
        console.log(`Error loading todos ${error}.`);
    }
}

async function writeTodo(info) {
    try {
        await addDoc(todoRef, { info: info });
        console.log("Successfully added todo to database!")
    } catch(error) {
        console.log(`I got an error: ${error}`)
    }
}

async function editTodo(id, updatedInfo) {
    const reference = doc(database, "todos", id)
    try {
        await updateDoc(reference, { info: updatedInfo })
    } catch (error) {
        console.log(`Edit error ${error}`)
    }
}

export function handleSubmit() {
    addBtn.addEventListener("click", () => {
        // creates task via factory function
        if ( inputTask.value !== "" ) {
            // Grab input values and refactor into an output
            const newTask = taskFactory( inputTask.value, inputDate.value, inputPriority.value );
            const newTaskText = newTask.info()
            inputTask.value = ""
            inputDate.value = ""
            writeTodo(newTaskText)
            loadTodos()
        } else {
            alert("Please fill out all inputs.")
        }
    })
};

export function render(arr) {

    // clears content on call
    todoContainer.innerText = "";

    arr.map( item => { 
        // creates tasks
        const task = document.createElement("li");
        task.innerText = item.info;
        task.className = "task";
        todoContainer.append(task);

        // remove button
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "X";
        removeBtn.className = "remove-btn";
        task.append(removeBtn)

        // remove button functionality:
        removeBtn.addEventListener("click", () => {
            deleteDoc(doc(todoRef, item.id))
            task.remove()
        })

        // edit button
        const editBtn = document.createElement("button")
        editBtn.innerText = "EDIT"
        editBtn.className = "edit-btn";
        task.append(editBtn)

        // edit button functionality
        editBtn.addEventListener("click", () => {

            // creates an input 
            const editInput = document.createElement("input");

            // creates a save button
            const saveBtn = document.createElement("button");
            saveBtn.innerText = "SAVE" ;

            // replaces original task with the input and save button
            task.replaceWith(editInput, saveBtn)

            // save button functionality
            saveBtn.addEventListener("click", () => {
                
                // // replaces old input with new input in array
                // arr.splice(arr.indexOf(item), 1, editInput.value)

                // // writes edit to the database
                editTodo( item.id, editInput.value )
                loadTodos()

            })
        })
    });
}    