const fs = require('fs');
const filePath = "./task.json";

const loadTask = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return  JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

const addTask = (task) => {
    const tasks = loadTask();
    tasks.push({task});
    saveTask(tasks);
    console.log("Task saved!", task);
    
}

const listTask = () => {
    const tasks = loadTask();
    tasks.forEach((task, index) => {
        console.log(`${index+1} - ${task.task}`);
        
    });
}

const removeTask = (index) => {
    const tasks = loadTask();

    if (index < 1 || index > tasks.length) {
        console.log("Invalid task number!");
        return;
    }

    const removed = tasks.splice(index - 1, 1);
    saveTask(tasks);

    console.log("Removed task:", removed[0].task);
};


const command = process.argv[2];
const arg = process.argv[3];     


if (command === "add") {
    addTask(arg);
} else if (command === "list") {
    listTask();
} else if(command === "remove"){
    removeTask();
}else{
    console.log("Command not found!");
}