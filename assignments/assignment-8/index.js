import express from "express";
import fs from "fs";
import { postsRouter } from "./routes/post.routes.js";

const app = express();

app.use(express.json());

const PORT = 6000;

app.use("/posts", postsRouter);

app.listen(PORT, () => {
    console.log("Server is running", PORT);
});
