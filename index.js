const http = require('http');
const server = http.createServer((req,res) =>{

   const url = req.url;
   if(url === '/home'){

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><h1>Welcome Home</h1></body>');
    res.write('</html>');
    res.end();


}  else if(url === '/about'){

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><h1>Welcome About Us</h1></body>');
    res.write('</html>');
    res.end();


}
else if(url === '/node'){

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><h1>Welcome To My Node Js project</h1></body>');
    res.write('</html>');
    res.end();


}else{

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter message</head></title>');
    res.write('<body><h1>Hello from node js server</h1></body>');
    res.write('</html');
    res.end();

}

});


server.listen(4000);