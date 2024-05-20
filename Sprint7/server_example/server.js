const express = require('express');
const path = require('path');
const fs = require('fs');
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

// In-memory "database"
let data = readData();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get data
app.get('/data', (req, res) => {
    res.json(data);
});

// Endpoint to add data
app.post('/data', (req, res) => {
    data.push(req.body);
    writeData(data);
    res.status(201).send('Data added');
});

// Endpoint to remove data
app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
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
