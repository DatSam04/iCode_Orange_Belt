/*  Notes:
  1. EventListener format: object.addEventListener(event_name, function)
  2. To use async with anonymous function: async () => {.....}
  3. Try_catch block format:
    try{
      .....
    }catch(error){
      console.error('Error fetching tasks:', error);
    }
  4. forEach method format: var_name.forEach(new_variable_name => ......)
  5. Add a data attribute: var_name.setAttribute(attribute_name, values)
  6. Create a HTML element and link to a variable: var_name = document.createElement(element_name)
  7. Modify an attribute or value of an HTML element: var_name.attribute = values
*/

/* To-do List for this project
  1. Add an event to the document and write the main code in the function
  2. Linked existing HTML tag to variables
  3. Create a function to fetch(retrieve) the task from server
  4. Create a function to render(display) task on web page
  5. Create a function to add new task to the server
  6. Activate the add task button with the addTask function and call fetchTasks to fetch and render whenever task is added or deleted
*/

// TODO 1: Add DOMContentLoaded event to the document

    /* TODO 2: Linked the existing HTML tag to a const variable
      1. Linked the adding task button to a variable called addTaskButton
      2. Linked the input text box to a variable called newTaskInput
      3. Linked the whole to-do list board to a variable called taskList
    */



    /* TODO 3: Create a variable named fetchTasks, and assign to it an anonymous function to retrieve tasks from server
      1. Use async and await in the function to ensure data is retrieved successfully before compiler execute the rest of the code
      2. Inside the function, use try_catch block to fetch data from server
      3. In the try block:
        a. Use: await fetch('/data') to fetch the data from server and store it in a variable, response
        b. Convert the response to json format: await var_name.json()
        c. The fetch will return a list, so use forEach method to render each task by passing the tasks to the render function
      4. In the catch block, we will catch the error and print it to the console. (Refer to the notes at the top)
    */


    /* TODO 4: Create a variable named renderTask and assign an anonymous function to it. This function take 1 argument, named it task
      1. Create a 'div' HTML element to store other tags
        a. Add class name cur_task to this div tag
        b. Add data-id attribute with a specific id from the task to this div tag (Hint: task.id)
      2. Create a 'p' element to store the task name
        a. Add class name my_task to this p tag
        b. Add the task name to the textContent attribute(Hint: task.text)
      3. Create a 'button' element to delete the task
        a. Add class name delete-btn to this button tag
        b. Assign the 'Delete' values to the textContent attribute
      4. Add the task name and delete button to the div element and add the div element to the task list
    */
    // Create a variable named renderTask and assign a function to it. This function take 1 argument, named it task

      // Add a click event to delete the task
      deleteBtn.addEventListener('click', async() => {
        try{
          const id = div.getAttribute('data-id');
          // Called DELETE API to delete task from the server
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



    /* TODO 5: Create a variable named addTask and assign an anonymous function with async to add task to the server
    */
    const addTask = async () => {
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

    /* TODO 6: Activate the add task button and called fetch tasks function to reload the task list
      1. Add a click event to the add task button and add the addTask function to the second argument
      2. Called the fetchTasks function
    */


