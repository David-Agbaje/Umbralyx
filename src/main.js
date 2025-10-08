/* eslint-disable no-unused-vars */

// Task Data Model
class Task {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.createdAt = new Date().toISOString();
  }
}


let tasks = [];

//Create
function addTask(title) {
  if (!title.trim()) {
    console.log("Task title cannot be empty!");
    return;
  }

  const newTask = new Task(Date.now(), title);
  tasks.push(newTask);
  console.log(" Task added:", newTask);
}

// Read
function listTasks() {
  console.log(" All tasks:");
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    tasks.forEach(task => {
      console.log(
        `${task.id}: ${task.title} (${task.completed ? " Done" : " Pending"})`
      );
    });
  }
}

// Update
function updateTask(id, newTitle) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.title = newTitle;
    console.log(" Task updated:", task);
  } else {
    console.log(" Task not found!");
  }
}

// Task Completed
function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    console.log(
      ` Task ${task.completed ? "completed" : "marked as pending"}:`,
      task
    );
  } else {
    console.log(" Task not found!");
  }
}

// Delete
function deleteTask(id) {
  const before = tasks.length;
  tasks = tasks.filter(t => t.id !== id);
  if (tasks.length < before) {
    console.log(" Task deleted. Remaining tasks:", tasks);
  } else {
    console.log(" Task not found!");
  }
} 



