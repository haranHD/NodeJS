const http = require("http");
const fs = require('fs');


//create server
const server = http.createServer((req , res) =>{
  // console.log(req.url)

  if(req.url == "/videos"){
    const readStream = fs.createReadStream("./sample.mp4");
    res.writeHead(200 , {"content-type" : "video/mp4"});
    readStream.pipe(res);
  }
  else{
    res.writeHead(200 , {"content-type": "text/plain"});
    res.end("Hello Haran!...");
  }
});

server.listen(5000 , () => {
  console.log("Server listing http://localhost:5000")
}); 