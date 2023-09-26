import express from "express";
// import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
const app = express();

app.use(express.json());

const PORT = 9010;
app.post("/todos", (req, res) => {
    const { body } = req;
});
// const dbUrl =
//     "mongodb+srv://rukshona:9Mz9RsQWU2CzBmMk@backend.lmtqy4k.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(dbUrl, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true
//     }
// });

app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});
