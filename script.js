let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

function toggleTaskStatus(taskId) {
    tasks.forEach(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
        }
    });
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTaskStatus(${task.id})" ${task.completed ? 'checked' : ''}>
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}
renderTasks();