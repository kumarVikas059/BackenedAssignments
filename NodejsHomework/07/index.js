const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        // res.statusCode=200
        res.setHeader('Content-Type','text/html')
        res.write("<h1>I am happy to learn Full-Stack Developent from PW skills!</h1>")
        res.end()
    }
});
server.listen(5003);
console.log("Server Running on the port 5003");