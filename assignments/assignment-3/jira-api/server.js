const http = require("http");
const { v4: uuid, validate } = require("uuid");
const stories = {};
const subtasks = {};
const port = 4040;
const host = "localhost";
const newId = uuid();
// const stories = {
//     "uuid-story-1": {
//         id: "uuid-story-1",
//         name: "Story 1",
//         description: "Description for Story 1",
//         status: "Todo", // "Todo", "InProgress", "InQA", "Done"
//         tasks: {
//             "uuid-task-1": {
//                 id: "uuid-task-1",
//                 name: "Sub-task 1",
//                 description: "Description for Sub-task 1",
//                 status: "Todo" // "Todo", "InProgress", "Done"
//             },
//             "uuid-task-2": {
//                 id: "uuid-task-2",
//                 name: "Sub-task 2",
//                 description: "Description for Sub-task 2",
//                 status: "InProgress" // "Todo", "InProgress", "Done"
//             }
//         }
//     },
//     "uuid-story-2": {
//         id: "uuid-story-2",
//         name: "Story 2",
//         description: "Description for Story 2",
//         status: "InProgress", // "Todo", "InProgress", "InQA", "Done"
//         tasks: {
//             "uuid-task-3": {
//                 id: "uuid-task-3",
//                 name: "Sub-task 3",
//                 description: "Description for Sub-task 3",
//                 status: "Done" // "Todo", "InProgress", "Done"
//             }
//         }
//     }
// };
// const parseId = (path, level) => {
//     const parts = path.split("/");
//     return parts[level];
// };
// const verifyPathMatch = (path, pattern) => {
//     const parts = path.split("/");
//     const pattern = pattern.split("/");
//     return (
//         parts.length === 4 &&
//         pattern.length === "stories" &&
//         validate(parts[level])
//     );
//     // Implement your logic
// };
// const getAllStories = (res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(stories));
// };
// const createStory = (req, res) => {
//     let body = [];
//     req.on("data", (chunk) => {
//         body.push(chunk);
//     });
//     req.on("end", () => {
//         body = JSON.parse(Buffer.concat(body));
//         const newStory = {
//             id: newId,
//             name: body.name,
//             description: body.description,
//             status: body.status
//         };
//         stories[newId] = newStory;

//         res.writeHead(201, { "content-type": "application/json" });
//         res.end(JSON.stringify(newStory));
//     });
// };
// const getStory = (req, res) => {
//     const id = parseId(req.url);
//     const story = stories[id];

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(story));
// };

// const updateStoryStatus = (req, res) => {
//     let body = [];
//     req.on("data", (chunk) => {
//         body.push(chunk);
//     });
//     req.on("end", () => {
//         body = JSON.parse(Buffer.concat(body));
//         const id = parseId(req.url);

//         story[id].status = body.status;

//         res.statusCode = 204;
//         res.end();
//     });
// };

// const deleteStory = (req, res) => {
//     const id = parseId(req.url);
//     delete story[id];
//     res.statusCode = 200;
//     res.end();
// };
// const server = http.createServer((req, res) => {
//     const isPathMatch = verifyPathMatch(req.url);
//     if (req.url === "/stories" && req.method === "GET") {
//         getAllStories(res);
//     } else if (req.url === "/stories" && req.method === "POST") {
//         createStory(req, res);
//     } else if (isPathMatch && req.method === "PATCH") {
//         updateStoryStatus(req, res);
//     } else if (isPathMatch && req.method === "GET") {
//         getStory(req, res);
//     } else if (isPathMatch && req.method === "DELETE") {
//         deleteStory(req, res);
//     } else {
//         res.writeHead(404, { "content-type": "text/plain" });
//         res.end("Wrong Address");
//     }
// });
const getAllSubtask = (res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(stories[subtask]));
};
const createSubtask = (req, res) => {
    let body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    });
    req.on("end", () => {
        stories[body] = JSON.parse(Buffer.concat(stories[body]));
        const newSubtask = {
            id: newId,
            name: stories[bosy].name,
            description: stories[body].description,
            status: stories[body].status
        };
        subtasks[newId] = newSubtask;

        res.writeHead(201, { "content-type": "application/json" });
        res.end(JSON.stringify(newStory));
    });
};
const getSubtask = (req, res) => {
    const id = parseId(req.url);
    const task = subtasks[id];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(task));
};

const updateStoryStatus = (req, res) => {
    let body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    });
    req.on("end", () => {
        body = JSON.parse(Buffer.concat(body));
        const id = parseId(req.url);

        task[id].status = body.status;

        res.statusCode = 204;
        res.end();
    });
};

const deleteStory = (req, res) => {
    const id = parseId(req.url);
    delete story[id]; //_______//
    res.statusCode = 200;
    res.end();
};
const server = http.createServer((req, res) => {
    const isPathMatch = verifyPathMatch(req.url);
    if (req.url === "/stories" && req.method === "GET") {
        getAllStories(res);
    } else if (req.url === "/stories" && req.method === "POST") {
        createStory(req, res);
    } else if (isPathMatch && req.method === "PATCH") {
        updateStoryStatus(req, res);
    } else if (isPathMatch && req.method === "GET") {
        getStory(req, res);
    } else if (isPathMatch && req.method === "DELETE") {
        deleteStory(req, res);
    } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Wrong Address");
    }
});
server.listen(port, host, () => {
    console.log("I am running on", port, host);
});
