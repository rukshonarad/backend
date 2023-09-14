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
//Get stories by id
app.get("/stories/:storyId", (req, res) => {
    const storyId = req.params.storyId;

    res.status(200).json({
        massage: stories[storyId]
    });
});
//Delete story by id
app.delete("/stories/:storyId", (req, res) => {
    const storyId = req.params.storyId;
    if (!validate(storyId) || !stories[storyId]) {
        return res.status(400).json({ message: "Not a valid story ID" });
    }
    delete stories[storyId];
    res.status(204).send();
});
//Update Story
app.put("/stories/:storyId", (req, res) => {
    const storyId = req.params.storyId;
    const updatedData = req.body;
    if (!validate(storyId) || !stories[storyId]) {
        return res.status(400).json({ message: "Not a valid story ID" });
    }
    stories[storyId] = { ...stories[storyId], ...updatedData };
    res.status(200).json({ data: stories[storyId] });
});

//Get all subtasks
app.get("./stories/:storyId/tasks"),
    (req, res) => {
        const storyId = req.params.storyId;
        if (!validate(storyId) || !stories[storyId]) {
            return res.status(400).json({ message: "Not a valid story ID" });
        }
        req.status(200).json({
            data: stories[storyId].tasks
        });
    };
// Get task by id

app.get("/stories/:storyId/tasks/:taskId", (req, res) => {
    const { storyId, taskId } = req.params;

    if (!validate(storyId) || !stories[storyId]) {
        return res.status(400).json({ message: "Not a valid story ID" });
    }

    const subTasks = stories[storyId].tasks.find((task) => task.id === taskId);

    if (!subTasks) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(subTasks);
});

//Create new subtask
app.post("./stories/:storyId/tasks"),
    (req, res) => {
        const storyId = req.params.storyId;
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
//////---------------

//-------------------------//
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
