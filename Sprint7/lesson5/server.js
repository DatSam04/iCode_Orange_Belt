const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// File path for the data file
const dataFilePath = path.join(__dirname, 'data.json');

// Function to read data from the file
function readData(){
    if(fs.existsSync(dataFilePath)){
        const fileData = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(fileData);
    }else{
        return [];
    }
}

// Function to write data to the file
function writeData(data){
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

// serve static files from the 'lab_ToDoList' folder
app.use(express.static(path.join(__dirname, 'lab_ToDoList')));

// Endpoint to get data
app.get('/data', (req, res) => {
    const data = readData();
    res.json(data);
    res.status(500).send({error: 'Failed to read data'});
});

// Endpoint to write data
app.post('/data', (req, res) => {
    try{
        const newTask = req.body;
        newTask.id = Date.now().toString(); //Assign a unique ID based on timestamp
        let data = readData();
        data.push(newTask);
        writeData(data);
        res.status(201).send(newTask);
    }catch(error){
        res.status(500).send({error: 'Failed to read data'});
    }
});


// Endpoint to delete data
app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    const data = readData();
    const index = data.findIndex(item => item.id === id);

    if(index !== -1){
        data.splice(index, 1); //Remove the item from the array
        writeData(data); // Update the file
        res.status(200).send('Data deleted');
    }else{
        res.status(404).send('Data not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});