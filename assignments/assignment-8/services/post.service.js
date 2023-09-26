import { v4 as uuid } from "uuid";
import fs from "fs";
import { threadId } from "worker_threads";

class PostService {
    async readAndParseFile() {
        try {
            const data = await fs.promises.readFile(
                "./data/posts.json",
                "utf-8"
            );
            const parsedData = JSON.parse(data);
            console.log(parsedData);
            return parsedData.posts;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
    async writeFile(data) {
        try {
            await fs.promises.writeFile(
                "./data/posts.json",
                JSON.stringify(data)
            );
        } catch (error) {
            throw error;
        }
    }

    async getAllPosts() {
        return await this.readAndParseFile();
    }
    async getPostById(postId) {
        try {
            const posts = await this.readAndParseFile();
            return posts[postId];
        } catch (error) {
            throw error;
        }
    }
    async createPost(data) {
        try {
            const postObj = await this.readAndParseFile();

            const id = uuid();

            const newPost = {
                id,
                ...data
            };
            postObj[id] = newPost;
            await this.writeFile({ posts: postObj });

            return newPost;
        } catch (error) {
            throw error;
        }
    }
    async updatePostById(postId, data) {
        try {
            const postObj = await this.readAndParseFile();
            if (postObj.hasOwnProperty(postId)) {
                const updatedPost = {
                    ...postObj[postId],
                    ...data
                };
                postObj[postId] = updatedPost;
                await this.writeFile({ posts: postObj });
                return updatedPost;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
    async deletePostById(postId) {
        try {
            const postObj = this.readAndParseFile();
            if (postObj.hasOwnProperty(postId)) {
                delete postObj[postId];
                await this.writeFile({ posts: postObj });
                return "Post was deleted";
            } else {
                return "Error: Post not found";
            }
        } catch (error) {
            throw error;
        }
    }
}

export const postService = new PostService();
