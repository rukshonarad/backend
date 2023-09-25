import { Router } from "express";
import { expenseController } from "../controllers/expense.controller.js";

const expenseRouter = new Router();

expenseRouter.get("/", expenseController.getAllExpense);
expenseRouter.get("/:expenseId", expenseController.getExpenseById);
expenseRouter.post("/", expenseController.createExpense);
expenseRouter.put("/:expenseId", expenseController.updateExpenseById);
expenseRouter.delete("/:expenseId", expenseController.deleteExpenseById);
export { expenseRouter };
