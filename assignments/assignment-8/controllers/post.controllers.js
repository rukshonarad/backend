import { postService } from "../services/post.service.js";
import fs from "fs";

class PostController {
    getAllPosts = async (req, res) => {
        try {
            const posts = await postService.getAllPosts();
            res.status(200).json({ data: posts });
        } catch (err) {
            res.status(500).json({ message: err });
        }
    };

    getPostById = async (req, res) => {
        const postId = req.params.postId;
        try {
            const data = await postService.getPostById(postId);
            if (data !== null) {
                res.status(200).json({ posts: data });
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        } catch (error) {
            throw error;
        }
    };
    createPost = async (req, res) => {
        try {
            const newPost = await postService.createPost(req.body);
            res.status(201).json({ data: newPost });
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    };
    updatePost = async (req, res) => {
        const postId = req.params.postId;
        try {
            // Validate the request body here if needed

            const updatedPost = await postService.updatePostById(
                postId,
                req.body
            );

            if (updatedPost !== null) {
                res.status(200).json({ data: updatedPost });
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        } catch (err) {
            console.error("Error updating post:", err);
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    };

    updatePost = async (req, res) => {
        const postId = req.params.postId;
        try {
            const updatedPost = await postService.updatePostById(
                postId,
                req.body
            );

            if (updatedPost === null) {
                throw new Error("Post not found");
            }

            res.status(200).json({ data: updatedPost });
        } catch (err) {
            console.error("Error updating post:", err);
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    };
    deletePostById = async (req, res) => {
        const postId = req.params.postId;
        try {
            await postService.deletePostById(postId);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    };
}

export const postController = new PostController();
