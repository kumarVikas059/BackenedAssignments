const fs = require("fs");
const data0 =
  "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";

 
fs.writeFileSync("nodejs_architecture.txt", data0);
const data =
    "Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non blocking I/O operation improve the scalability and performance of web applications built on other frameworks.Node js can easily handle multiple client requests without requiring multiple threads, consuming less memoryand resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier."
 
fs.appendFileSync("nodejs_architecture.txt",data);
  


