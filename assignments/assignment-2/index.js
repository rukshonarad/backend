const fs = require("fs");
const http = require("http");
const { data } = require("./data");
console.log(data);

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "plain/text");
    res.end("Hello");
});

server.listen(port, host, () => {
    console.log("I am running on", port, host);
});
