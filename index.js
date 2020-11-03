const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 8000;
const home = fs.readFileSync('index.html')
    //const about = fs.readFileSync('./about.html ')
    //const contact = fs.readFileSync('./contact.html ')
    //const services = fs.readFileSync('./ services.html ')

const server = http.createServer((req, res) => {
    let url = req.url;
    console.log(req, url);
    //let url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //if (url == '/') {
    res.end(home);
    //} else if (url == '/about') {
    //  res.end(about);
    //} else if (url == '/services') {
    // res.end(services);
    //} else {
    //  res.statusCode = 404;
    // res.end("<h1>404 not found</h1>");
    //}
    //});

    //res.setHead(200, { 'Content-type': 'text / html ' });
    //res.end('home');

});
server.listen(8000, '127.0.0.1', () => {
    console.log("listening on port 8000")
});
//server.listen(port, hostname, () => {
////console.log(`
//Server running at http: //${hostname}:${port}/`);
//});