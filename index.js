const http = require('http');
const data = {
        fname: "Rakesh",
        lname: "Gowda",
        age: 26,
        city: "Bangalore"
}

const jsonData = JSON.stringify(data);

const server = http.createServer((req,res)=>{
        res.write(`<h1> Welcome to CG World </h1>`)
        res.write(jsonData)
        res.end()
})

server.listen(3000,()=>{
        console.log("server started");
})