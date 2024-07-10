 const fs = require("fs");
 
// sync call
//fs.writeFileSync("./test.txt", "Hello");

// Async call 
//fs.writeFile("./test.txt", "Hello World", (err) => {});

// we have to read contact file (path, encoding)
// sync result ko variable mein store karke de deta hai
//const result =  fs.readFileSync("./contact.txt", "utf-8")
//console.log(result);

// ye kuch return nhi karta balki callback leta hai and uss mein res err deta hai
/*fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if (err){
    console.log("Error", err);
  } else{
  console.log(result);
  }
});*/

// this doesnt overwrite
//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

//fs.cpSync("./test.txt", "./copy.txt");

// delete file
//fs.unlinkSync("./copy.txt");

//console.log(fs.statSync("./test.txt").isFile());

// make directory
//fs.mkdirSync("my-docs");

fs.mkdirSync("my-docss/a/b", {recursive: true});
