import http, {IncomingMessage, ServerResponse} from "node:http";
import net from 'net';

const server = http.createServer((req:IncomingMessage, res:ServerResponse) =>{
    res.end("Server is running");
});

server.listen(3000,"127.0.0.1", () =>{
    const addr = server.address() as net.AddressInfo;
    console.log(`Server Running at http://${addr.address}:${addr.port}`);
});

/*
127.0.0.1 is the loopback (localhost) address
the server only accepts connections originated from same machine
devices on the local network or the internet cannnot to him
*/