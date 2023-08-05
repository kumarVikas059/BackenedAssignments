const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.setHeader('Content-type','html/text')
        res.write("<h1>I am happy to learn Full Stack Developent from PW skills!</h1>")
        res.end()
    }
});
server.listen(5001);
console.log("Server Running on the port 5000");