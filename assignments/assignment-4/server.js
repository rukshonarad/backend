import express from "express";
import { stories } from "./data.js";
import { validate, v4 as uuid } from "uuid";
const app = express();
app.use(express.json());

const PORT = 5020;

//Get all stories
app.get("/stories", (req, res) => {
    res.status(200).json({
        data: stories
    });
});
// POST /stories: Create a new story
app.post("/stories", (req, res) => {
    const id = uuid();
    const { name, description, status } = req.body;
    stories[id] = { id, name, description, status, tasks: {} };
    res.status(201).json(stories[id]);
});
//Get stories by id
app.get("/stories/:storyId", (req, res) => {
    const { storyId } = req.params;
    if (!validate(storyId) || !stories[storyId]) {
        return res.status(404).json({ message: "Story not found" });
    }
});

//Update Story
app.put("/stories/:storyId", (req, res) => {
    const { storyId } = req.params;
    const { name, description, status } = req.body;
    if (!validate(storyId) || !stories[storyId]) {
        return res.status(400).json({ message: "Not a valid story ID" });
    }
    stories[storyId] = { ...stories[id], name, description, status };
    res.status(200).json({ data: stories[storyId] });
});
//Delete story by id
app.delete("/stories/:storyId", (req, res) => {
    const { storyId } = req.params;
    if (!validate(storyId) || !stories[storyId]) {
        return res.status(400).json({ message: "Not a valid story ID" });
    }
    delete stories[storyId];
    res.status(204).send();
});
//Get all subtasks
app.get("./stories/:storyId/tasks"),
    (req, res) => {
        const { storyId } = req.params;
        if (!validate(storyId) || !stories[storyId]) {
            return res.status(404).json({ message: "Not a valid story ID" });
        }
        const taskId = uuid();
        const { name, description, status } = req.body;
        stories[storyId].tasks[taskId] = {
            id: taskId,
            name,
            description,
            status
        };
        res.status(201).json(stories[storyId].tasks[taskId]);
    };

//Create new subtask
app.post("./stories/:storyId/tasks"),
    (req, res) => {
        const { storyId } = req.params;
        const reviewData = req.body;
        const id = uuid();
        if (!validate(storyId) || !stories[storyId]) {
            return res.status(400).json({ message: "Not a valid story ID" });
        }
        const newTask = {
            id,
            ...reviewData
        };
        stories[storyId].tasks.push(reviewData);
        req.status(201).json({
            data: newTask
        });
    };
// Get task by id

app.get("/stories/:storyId/tasks/:taskId", (req, res) => {
    const { storyId, taskId } = req.params;

    if (
        !validate(storyId) ||
        !stories[storyId] ||
        !validate(taskId) ||
        !stories[storyId].tasks[taskId]
    ) {
        return res.status(404).json({ message: "Not a valid story ID" });
    }
    res.json(stories[storyId].tasks[taskId]);
});
//Update tast by id
app.put("/stories/:storyId/tasks/:taskId", (req, res) => {
    const { id, taskId } = req.params;
    if (
        !validate(storyId) ||
        !stories[storyId] ||
        !validate(taskId) ||
        !stories[storyId].tasks[taskId]
    ) {
        return res.status(404).json({ message: "Sub-Task not found" });
    }
    const { name, description, status } = req.body;
    stories[storyId].tasks[taskId] = {
        ...stories[storyId].tasks[taskId],
        name,
        description,
        status
    };
    res.json(stories[storyId].tasks[taskId]);
});

// DELETE /stories/:id/tasks/:taskId: Delete a specific sub-task by ID within a specific story
app.delete("/stories/:id/tasks/:taskId", (req, res) => {
    const { storyId, taskId } = req.params;
    if (
        !validate(storyId) ||
        !stories[storyId] ||
        !validate(taskId) ||
        !stories[storyId].tasks[taskId]
    ) {
        return res.status(404).json({ message: "Sub-Task not found" });
    }
    delete stories[storyId].tasks[taskId];
    res.status(204).send();
});
//////---------------

//-------------------------//
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
