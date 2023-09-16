import express from "express";
import { companyRouter } from "./routes/company.route.js";

const app = express();
app.use(express.json());

const PORT = 5070;
const API_KEY = "7b54d3e-6a9c-4e52-9f5e-8d1a9821c71e";
app.use("/company", companyRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
