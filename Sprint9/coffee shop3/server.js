const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000; //port 3000 allows us to experience with express server without root access

// Middleware
app.use(express.json());

// File path for the data file
const filePath = path.join(__dirname, 'coffee.json');

// Function to read data from the file
function readData(){
    if(fs.existsSync(filePath)){
        const fileData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileData);
    }else{
        return [];
    }
}

// serve static files from the 'HTML folder'
app.use(express.static(path.join(__dirname, 'Main_Code')));

// Endpoint to get data
app.get('/coffee', (req, res) => {
    const data = readData();
    res.json(data)
    res.status(500).send({error: 'Failed to read data'});
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});