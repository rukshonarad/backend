const http = require("http");
const { v4: uuid } = require("uuid");

const port = 3030;
const host = "localhost";
const newId = uuid();
// {
//     applications = {};
// }
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
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(applications));
};

const createApplication = (req, res) => {
    let body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    });
    req.on("end", () => {
        body = JSON.parse(Buffer.concat(body));
        const newApplication = {
            id: newId,
            companyName: body.companyName,
            recruiterName: body.recruiterName,
            position: body.position,
            appliedDate: body.appliedDate,
            applicationStatus: body.applicationStatus
        };
        applications[newId] = newApplication;

        res.writeHead(201, { "content-type": "application/json" });
        res.end(JSON.stringify(newApplication));
    });
};

const getApplication = (req, res) => {
    const id = parseId(req.url, 2);
    const application = applications[id];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(application));
};

const updateApplicationStatus = (req, res) => {
    // Code to update a job application's status
};

const deleteApplication = (req, res) => {
    // Code to delete a job application
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
