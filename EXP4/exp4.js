const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("Hello, Welcome to Node.js!");
    res.end();
});

server.listen(3000, ()=> {
    console.log("Server is runig on port 3000");
});

//http://localhost:3000;
