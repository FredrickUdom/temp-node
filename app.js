// const http = require('http');

// const server = http.createServer(/*callBack arrow function */(req, res)=>{
//  if(req.url === '/'){
//     res.end('<p>welcome to the home page</p> <a href="/about"> visit the about page here</a>');
//  }

//  if(req.url === '/about'){
//     res.end(`<p>this is the about us page</p>
//      <a href="/">Visit Home page here</a>`)
//  }
//  res.end(`<h1> Oops! Page Not Found </h1>
//     <p> please click on the link to visit homepage </p>
//     <a href="/"> click here </a>`
//  )
// })
// server.listen(4000)

const lodash = require('lodash');

const items = [1,[2,[3,[4,[5,[6]]]]]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);