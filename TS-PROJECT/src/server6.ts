import http, {IncomingMessage, ServerResponse} from "node:http";
import net from 'net';

const server = http.createServer((req:IncomingMessage, res:ServerResponse) =>{
    res.end("Server is running");
});

server.on("error", (err:NodeJS.ErrnoException)=>{
    if(err.code == "EADDRINUSE"){
        console.error("Port already in use");
    }
    else if(err.code = "EACCESS"){
        console.error("Port requires elevayted previliges");
    }
    else{
        console.error("Server error: ", err.message);
    }
    process.exit(); //to stop the serverES
});
server.listen(3000, () =>{
    const addr = server.address() as net.AddressInfo;
    console.log(`Server Running at http://localhost:${addr.port}`);
});

/*
127.0.0.1 is the loopback (localhost) address
the server only accepts connections originated from same machine
devices on the local network or the internet cannnot to him
*/