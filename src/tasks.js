export default

function taskFactory(task, dueDate, priority){
    const info = () => ( `${task} by ${dueDate} having ${priority} priority.` );

    return { task, dueDate, priority, info };
}
