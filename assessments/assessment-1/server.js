const http = require("http");
const { v4: uuid, validate } = require("uuid");
const fs = require("fs");

const port = 3070;
const host = "localhost";
const newId = uuid();
// {
//     applications = {};
// }
const handleErrors = (res, message = "Something went wrong from our side") => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(message);
};
const parseId = (path, level) => {
    const parts = path.split("/");
    return parts[level];
};

const verifyPathMatch = (path, pattern) => {
    const parts = path.split("/");
    return (
        parts.length === pattern &&
        parts[1] === "applicatons" &&
        validate(parts[2])
    );
};
const getAllApplications = (res) => {
    // Code to return all job applications

    fs.readFile("job-applications.json", "utf-8", (err, data) => {
        if (err) {
            handleErrors(res);
        }

        const parsedData = JSON.parse(data);

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(parsedData));
    });
};

const createApplication = (req, res) => {
    fs.readFile("job-applications.json", "utf-8", (err, data) => {
        if (err) {
            ç;
            handleErrors(res);
        }

        const parsedApplicationData = JSON.parse(data);

        let body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            body = JSON.parse(Buffer.concat(body));
            const newJobApplication = {
                id: newId,
                companyName: body.companyName,
                recruiterName: body.recruiterName,
                position: body.position,
                appliedDate: body.appliedDate,
                status: body.status
            };
            parsedApplicationData[newId] = newJobApplication;

            fs.writeFile(
                "job-applications.json",
                JSON.stringify(parsedApplicationData),
                (err) => {
                    if (err) {
                        handleErrors(res);
                    }
                    res.writeHead(201, { "content-type": "application/json" });
                    res.end(JSON.stringify(newJobApplication));
                }
            );
        });
    });
};

const getApplication = (req, res) => {
    fs.readFile("job-applications.json", "utf-8", (err, data) => {
        if (err) {
            handleErrors(res);
        }

        const parsedApplicationData = JSON.parse(data);

        const id = parseId(req.url, 2);
        const application = parsedApplicationData[id];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(application));
    });
};

const updateApplicationStatus = (req, res) => {
    fs.readFile("job-applications.json", "utf-8", (err, data) => {
        if (err) {
            handleErrors(res);
        }

        const parsedApplicationData = JSON.parse(data);

        let body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            body = JSON.parse(Buffer.concat(body));
            const id = parseId(req.url, 2);

            parsedApplicationData[id].status = body.status;

            fs.writeFile(
                "job-applications.json",
                JSON.stringify(parsedApplicationData),
                (err) => {
                    if (err) {
                        handleErrors(res);
                    }

                    res.statusCode = 204;
                    res.end();
                }
            );
        });
    });
};

const deleteApplication = (req, res) => {
    fs.readFile("job-applications.json", "utf-8", (err, data) => {
        if (err) {
            handleErrors(res);
        }

        const parsedApplicationData = JSON.parse(data);

        const id = parseId(req.url, 2);
        delete parsedApplicationData[id];
        res.statusCode = 200;
        res.end();
    });
};
const server = http.createServer((req, res) => {
    const isPathMatch = verifyPathMatch(req.url); //
    if (req.url === "/applications" && req.method === "GET") {
        getAllApplications(res);
    } else if (req.url === "/applications" && req.method === "POST") {
        createApplication(req, res);
    } else if (isPathMatch && req.method === "PATCH") {
        updateApplicationStatus(req, res); //
    } else if (isPathMatch && req.method === "GET") {
        getApplication(req, res);
    } else if (isPathMatch && req.method === "DELETE") {
        deleteApplication(req, res);
    } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Wrong Address");
    }
});
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
