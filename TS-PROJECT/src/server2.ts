import http, {IncomingMessage, ServerResponse} from "node:http";

const server = http.createServer((req:IncomingMessage, res:ServerResponse) =>{
    console.log("Incoming request");
    console.log("Method: ", req.method);
    console.log("URL: ", req.url);
    console.log("Headers: ", JSON.stringify(req.headers, null, 4));
    //Setting the response
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.setHeader("X-My-Custom-Header", "ABCDEF");
    res.end("Hello from node.js");
});

server.listen(3000, () =>{
    console.log("Server Running");
})