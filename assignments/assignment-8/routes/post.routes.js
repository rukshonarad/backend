import { Router } from "express";

import { postController } from "../controllers/post.controllers.js";

const postsRouter = new Router();

postsRouter.get("/", postController.getAllPosts);
postsRouter.post("/", postController.createPost);
postsRouter.put("/:postId", postController.updatePost);
postsRouter.delete("/:postId", postController.deletePostById);
postsRouter.get("/:postId", postController.getPostById);
export { postsRouter };
