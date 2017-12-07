#!/usr/bin/env node
let http = require("http");
let httpProxy = require("http-proxy");
let proxy = httpProxy.createProxy({});
let filePath = (process.argv && process.argv[2]) || "../proxyConfig.js";
let path = require("path");
console.log("config path:");
console.log(path.resolve(filePath));
let proxyConfig = require(path.resolve(filePath));
// console.log(process.env)
console.log("config content:")
console.log(proxyConfig);
for(let obj of proxyConfig){
    let server = http.createServer(function (req, res) {
        proxy.web(req,res,{target:obj.targetUrl});
    });
    console.log(`port:${obj.port} targetUrl:${obj.targetUrl}`);
    server.listen(obj.port);
}
console.log("yanProxy is running...");