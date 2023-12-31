import { Router } from "express";
import { todoController } from "../controllers/todo.controller.js";

const todoRouter = Router();

todoRouter.get("/", todoController.getAll);
todoRouter.post("/", todoController.create);
todoRouter.get("/:id", todoController.getAll);
todoRouter.delete("/:id", todoController.delete);
todoRouter.patch("/:id", todoController.update);
