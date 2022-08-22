//handles task creation
export default

function taskFactory(task, dueDate, priority){
    const info = () => 
        task + " due on " + dueDate + " with priority level: " + priority;
    return {task, dueDate, priority, info};
}
