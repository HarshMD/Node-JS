import http, {IncomingMessage, ServerResponse} from "node:http";

const server = http.createServer((req:IncomingMessage, res:ServerResponse) =>{
    res.end("Hello from node.js");
});

server.listen(3000, () =>{
    console.log("Server Running");
})