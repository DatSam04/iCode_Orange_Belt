const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000; //port 3000 allows us to experience with express server without root access

// Middleware
app.use(express.json());

// File path for the data file
const filePath = path.join(__dirname, 'coffee.json');
const cartfilePath = path.join(__dirname, 'cart.json');

// Function to read data from the coffee file
function readData(file){
    if(fs.existsSync(file)){
        const fileData = fs.readFileSync(file, 'utf8');
        return JSON.parse(fileData);
    }else{
        return [];
    }
}

// Add item to shopping cart
function writeData(data){
    fs.writeFileSync(cartfilePath, JSON.stringify(data, null, 2), 'utf8');
}

// serve static files from the 'HTML folder'
app.use(express.static(path.join(__dirname, 'Main_Code')));

// Endpoint to get data for all coffee
app.get('/coffee', (req, res) => {
    const data = readData(filePath);
    res.json(data);
});

// Endpoint to get data for item in my cart
app.get('/cart', (req, res) => {
    const data = readData(cartfilePath);
    res.json(data);
});

// Endpoint to add coffee to my cart
app.post('/cart', (req, res) => {
    try{
        const newItem = req.body;
        let existed = false; // Ensure no duplicated item
        let data = readData(cartfilePath);
        // Loop through the shopping cart and increase the amount if item already existed
        data.forEach((item) => {
            if(item.id === newItem.id && item.title === newItem.title){
                item.amount += 1;
                existed = true;
            }
        });
        // If item is not existed, add it to the cart
        if(!existed){
            newItem.amount = 1;
            data.push(newItem);
        }
        writeData(data);
        res.status(201).send(newItem);
    }catch(error){
        res.status(500).send({error: 'Failed to read data'});
    }
});

// Endpoint to delete item from cart
app.delete('/cart/:id', (req, res) => {
    try{
        const id = req.params.id;
        const data = readData(cartfilePath);
        let index = -1;
        let curIndex = 0;
        data.forEach((item) => {
            if(item.id.toString() === id.toString()){
                if(item.amount > 1){
                    item.amount -= 1;
                }else{
                    // Get the index of the item in the shopping cart array
                    index = data.findIndex(curItem => curItem.id.toString() === id.toString());
                }
            }
        });
        if(index !== -1){
            data.splice(index, 1); //Remove the item from the array
            res.status(200).send('Data removed');
        }
        writeData(data); //Update the file
        res.status(200).send('Data changed');
    }catch(error){
        res.status(500).send({error: 'Failed to remove item'});
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});