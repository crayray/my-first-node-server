//We need to use the http module to run this as a webserver.
const http= require('http')

//This creates the server
const server = http.createServer((request, response) => {
    console.log(request.headers)
    console.log(request.method)
    console.log(request.url)

    // response.setHeader('Content-Type', 'text/html');
    // response.end('<h1>helloooo there friend</h1>');

    const user = {
        name: "John",
        hobby: "skating"
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user))
})

//This will tell node which port to listen on
server.listen(3000);
