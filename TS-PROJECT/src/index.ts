import http, { IncomingMessage, ServerResponse } from "node:http";

const server = http.createServer((req: IncomingMessage, res: ServerResponse) =>{

    const {pathname} = new URL (req.url!, "http://localhost")

    res.setHeader("Content-Type", "application/json");

    if(pathname === "/"){
        res.statusCode = 200;
        res.end(JSON.stringify({message: "Welcome to API"}));
    }
    else if(pathname === "/health") {
        res.statusCode = 200;
        //without end, the browser will think that more data is needed hang
        res.end(JSON.stringify({
        status: "healthy",
        uptime: process.uptime()
        }));
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({error: "Not found", path: pathname}));
    }
});

server.listen(3000, () => {
    console.log("Server with router running on http://localhost:3000");
})