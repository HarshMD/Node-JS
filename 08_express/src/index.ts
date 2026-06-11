import express from "express";
import type {Request, Response} from "express";
const app = express();

const PORT: number = parseInt(process.env.PORT || "3000", 10);
app.use(express.json());

app.get("/products", (req:Request, res:Response) => {
    res.json({action:"GET - all products"});
});

app.post("/products", (req:Request, res:Response) => {
    res.status(201).json({action: "POST - create product", received: req.body});
});

app.put("/product/1", (req:Request, res:Response) => {
    res.json({action: "PUT - replace product 1", received: req.body});
});

app.patch("/product/1", (req:Request, res:Response) => {
    res.json({action: "PATCH - partial update product 1", received: req.body});
});

app.delete("/product/1", (req:Request, res:Response) => {
    res.json({action: "DELETE - remove a product", received: req.body});
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});


// // 10 -> decimal number system, base 10
// app.set("appName","My express app");
// app.get("/", (req:Request, res: Response) =>{
//     res.status(200).send("OK");
// });

// app.get("/name", (req:Request, res: Response) =>{
//     res.send("Application Name: " + app.get("appName"));
//     // it automatically generates content type
// });
// app.get("/html", (req:Request, res: Response) =>{
//     res.send("<h1>Hi there</h1>");
// });
// app.get("/api/status", (req:Request, res: Response) =>{
//     res.json({
//         status:"running",
//         timestamp:new Date().toString()
//     });
// });
// app.get("/buffer", (req:Request, res: Response) =>{
//     res.send(Buffer.from("Buffer Data"));
// });