import http, {IncomingMessage, ServerResponse} from "node:http";

interface UserData{
    name:string;
    role:string;
    skills:string[];
}

const server = http.createServer((req:IncomingMessage, res:ServerResponse) =>{
    const {method, url} = req;

    if(method === "GET" && url === "/data"){
        const data:UserData = {
            name:"Amit",
            role:"Admin",
            skills:["Node.js", "JS"]
        };
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(data));
    }

    if(method === "GET" && url === "/"){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Home page");
    }
    else if(method === "GET" && url === "/old-page"){
        res.writeHead(301, {"Location":"/new-page"});
        res.end();
    }
    else if(method === "GET" && url === "/new-page"){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end("<h1>New page</h1>");
    }
    else if(method === "GET" && url === "/error"){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end("<h1>An error page</h1>");
    }
    else{
        res.writeHead(404, {"Content-Type":"text/html"});
        res.end("<h1>Not Found</h1>");
    }
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