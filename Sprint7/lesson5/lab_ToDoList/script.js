// Lab (Todo List)
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

    // Function to fetch task form the server
    const fetchTasks = async () => {
      try{
        const response = await fetch('/data');
        const tasks = await response.json();
        tasks.forEach(task => renderTask(task));
      }catch (error){
        console.error('Error fetching tasks:', error);
      }
    }

    // Function to render a task
    const renderTask = (task) => {
      const div = document.createElement('div');
      div.className = 'cur_task';
      div.setAttribute('data-id', task.id);

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
        div.classList.toggle('strike-through', checkbox.checked);
      });

      const textNode = document.createElement('p');
      textNode.textContent = task.text;
      textNode.className = 'my_task';

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.addEventListener('click', async() => {
        try{
          const id = div.getAttribute('data-id');
          const response = await fetch(`/data/${id}`, { method: 'DELETE'});
          if(response.ok){
            taskList.removeChild(div);
          }else{
            console.error('Error deleting task:', await response.text());
          }
        }catch(error){
          console.error('Error deleting task:', error);
        }
      })

      div.appendChild(checkbox);
      div.appendChild(textNode);
      div.appendChild(deleteBtn);
      taskList.appendChild(div);
    }

    // Function to add a new task
    const addTask = async () => {
      console.log(newTaskInput);
      const taskText = newTaskInput.value.trim();
      if(taskText){
        const newTask = { text: taskText };
        try {
          const response = await fetch('/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
          });
          const savedTask = await response.json();
          renderTask(savedTask);
          newTaskInput.value = ''; // clear input
        }catch(error){
          console.error('Failed to add task:', error)
        }
      }
    };

    // Event listener for the 'Add' button
    addTaskButton.addEventListener('click', addTask);

    // Fetch and render tasks on page load
    fetchTasks();
});