import http, {IncomingMessage, ServerResponse} from "node:http";

const server = http.createServer((req:IncomingMessage, res:ServerResponse) =>{
    
    res.writeHead(200, {
        "Content-type": "text/html",
    })
    res.end("<h1>Hello from node JS</h1>");
});

server.listen(3000, () =>{
    console.log("Server Running");
});

/*
Range       Category            Common Codes
1XX         Informational       100 continue, 101 switching protocols
2XX         Success             200 OK, 201 Created, 204 No Content
3XX         Redirection         301 Moved Permanently, 302 Found, 304 Not Modified
4XX         Client Error        400 Bad Request, 401 Unauthorised, 403 Forbidden, 404 Not Found
5XX         Server Error        500 Internal Server Error, 502 Bad Gateway, 503 Service unavailable
*/