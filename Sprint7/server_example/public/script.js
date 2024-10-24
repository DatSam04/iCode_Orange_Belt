
// Example of sending XMLHttpRequest
function loadXMLDoc(){
    document.getElementById("read_btn").style.display = "none";
    console.log("Test server");
    // Create a new XMLHttpRequest object
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("my_server").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "text.txt", true);
    xhttp.send();
}

// Use XMLHttpRequest methods to read and write data to a server (URL)
/* Reading Data from a Server(GET Request)
1. Create an instance of 'XMLHttpRequest'
2. Define the method and URL for the request
3. Set up a function to handle the response
4. Send the request
*/
function fetchServerData(){
    // Create a new XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();

    // Configure GET-request for the URL
    xmlhttp.open('GET', '/data', true);

    // Set up the function to handle the response
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
            console.log(JSON.parse(xmlhttp.responseText));
        }
    };

    // Set up the function to handle the errors
    xmlhttp.onerror = function(){
        console.error('Request failed');
    };

    // After setting up the request method and handling response and error, send the request
    xmlhttp.send();
}

/* Writing Data to a Server(POST Request)
1. Create an instance of 'XMLHttpRequest'
2. Define the method, URL, and set the request headers
3. Setup functions to handle the response and errors
4. Send the request with the data.
*/
function createPost(){
    // Create a new XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();

    // Configure POST-request for the URL
    xmlhttp.open('POST', '/data', true);
    // Set the request header to indicate the type of content being sent
    xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Set up the function to handle the response
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 201) {
            console.log("Data added");
        }
    };

    // Set up the function to handle errors
    xmlhttp.onerror = function(){
        console.error('Request failed');
    };

    // Prepare the data to be send (as a JSON string)
    var data = JSON.stringify({
        message: 'Hello, World!'
    });

    // Send the request with the data
    xmlhttp.send(data);
}