const fs = require("fs");
const http = require("http");
const { data } = require("./data");
console.log(data);

const host = "localhost";
const port = 4000;

const server = http.createServer((request, response) => {
    console.log(request.url);

    if (request.url === "/styles.css") {
        fs.readFile("style.css", "utf-8", (err, css) => {
            if (err) {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.end("Something went wrong from our side");
            }
            response.setHeader("Content-Type", "text/css");
            response.end(css);
        });
        if (request.url === "/") {
            fs.readFile("templates/index.html", "utf-8", (err, html) => {
                if (err) {
                    response.writeHead(500, { "Content-Type": "text/plain" });
                    response.end("Something went wrong from our side");
                }
                response.setHeader("Content-Type", "text/html");
                response.end(html);
            });
        } else if (request.url === "/") {
            fs.readFile("templates/user.html", "utf-8", (err, html) => {
                if (err) {
                    response.writeHead(500, { "Content-Type": "text/plain" });
                    response.end("Something went wrong from our side");
                }
                response.setHeader("Content-Type", "text/html");
                response.end(html);
            });
        } else {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end(data);
        }
    }
    response.setHeader("Content-Type", "plain/text");
    response.end(data);
});

server.listen(port, host, () => {
    console.log(`"I am running on", ${host}, ${port}`);
});
