import { expenseService } from "../services/expense.service.js";
import fs from "fs";

class ExpenseController {
    getAllExpense(req, res) {
        expenseService
            .getAllExpense()
            .then((parsedData) => {
                res.status(200).json({
                    expense: parsedData
                });
            })
            .catch((err) => {
                res.status(500).json({ massage: err });
            });
    }
    getExpenseById(req, res) {
        const expenseId = req.params.expenseId;
        const expense = expenseService
            .getExpenseById(expenseId)
            .then((data) => {
                res.status(200).json({ expense: data });
            })
            .catch((err) => {
                res.status(500).json({ massage: err });
            });
        return expense;
    }
    createExpense(req, res) {
        expenseService
            .createExpense(req.body)
            .then((newExpense) => {
                res.status(201).json({ data: newExpense });
            })
            .catch((err) => {
                res.status(500).json({ massage: err });
            });
    }
    updateExpenseById(req, res) {
        const expenseId = req.params.expenseId;

        const expense = expenseService
            .updateExpenseById(expenseId, req.body)
            .then((updateExpense) => {
                res.status(200).json({ data: updateExpense });
            })
            .catch((err) => {
                res.status(500).json({ massage: err });
            });
        return expense;
    }
    deleteExpenseById(req, res) {
        const expenseId = req.params.expenseId;
        const expense = expenseService
            .deleteExpenseById(expenseId)
            .then(() => {
                res.status(204).send();
            })
            .catch((err) => {
                res.status(500).json({
                    message: err
                });
            });
        return expense;
    }
}
export const expenseController = new ExpenseController();
