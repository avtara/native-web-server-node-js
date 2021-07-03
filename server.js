const http = require('http');

const requestListener = (request,response) =>{
    response.setHeader('Content-Type', 'text/html');

    const {method} = request;
    if (method === 'GET'){
        response.statusCode = 200;
        response.end('this is GET method');
    }
    
    if (method === 'POST'){
        response.statusCode = 200;
        response.end('this is POST method');
    }

    if (method === 'PUT'){
        response.statusCode = 200;
        response.end('this is PUT method');
    }

    if (method === 'DELETE'){
        response.statusCode = 200;
        response.end('this is DELETE method');
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port,host,()=>{
    console.log(`server berjalan pada http://${host}:${port}`)
})