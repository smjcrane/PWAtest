"use strict";

let http = require('http');
let url = require('url');
let fs = require('fs');
let qs = require('querystring');

http.createServer(function (req, res) {
  /*let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  let params = qs.parse(url.parse(req.url).query);
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    */
  fs.readFile("./homepage.html", function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);