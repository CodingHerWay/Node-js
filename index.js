const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log =`${Date.now()}:${req.method} ${req.url} New req recieved\n`;
  const myUrl = url.parse(req.url , true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch(myUrl.pathname) { // myUrl.pathname // req.url
      case "/":
      if (req.method ==="GET") res.end("Welcome to Home Page");
    
      break;
      case "/about" : 
      const username = myUrl.query.myname
      res.end(`Hi, ${username}`);
      break;

      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your results for" + search);

        case "/signup":
          if (req.method ==="GET") res.end("This is a signup form");
          else if (req.method ==="POST") {
            // DB query
            res.end("Thanks for signing up");
          }
      default:
       res.end("404 Page");
    }
  });
 
});

myServer.listen(8000, () =>{
  console.log("server started")
});