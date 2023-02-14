const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(`<h1>hey how are you?</h1> <p>please visit the other page</p> <a href="/check">visit check</a>`)
    }
    if(req.url === '/check'){
        res.end(`<h1>the checks is here to serve our esteem clients</h1> <p> please visit home </p> <a href="/"> click home</a>`)
    }
    else{
        res.end(`<h1>OOPS! sorry page  not found</h1> <p> click any of the link to navigate to your choice</p> <a href="/">go back home</a> </br> <a href="/check"> go back checks</a>`)
    }
  
})
server.listen(3000)