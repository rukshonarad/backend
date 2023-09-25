import { incomesRouter } from "./routes/income.routes.js";
import { expenseRouter } from "./routes/expense.routes.js";
import express from "express";

const app = express();
app.use(express.json());

const PORT = 4090;

app.use("/incomes", incomesRouter);
app.use("/expense", expenseRouter);
app.listen(PORT, () => {
    console.log("Process is running on ", PORT);
});
