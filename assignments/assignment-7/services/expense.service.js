import { v4 as uuid } from "uuid";
import fs from "fs";

class ExpenseService {
    readFile() {
        const data = fs.promises.readFile("expenses.json", "utf-8");
        const dataObj = data.then((data) => {
            const parsedObj = JSON.parse(data);
            return parsedObj.expense;
        });
        return dataObj;
    }
    writeFile(data) {
        return fs.promises.writeFile("expenses.json", JSON.stringify(data));
    }
    getAllExpense() {
        return this.readFile();
    }
    getExpenseById(expenseId) {
        const expense = this.readFile();
        const result = expense.then((data) => {
            return data[expenseId];
        });
        return result;
    }
    createExpense(data) {
        const expense = this.readFile();

        return expense.then((expenseObj) => {
            const id = uuid();

            const newExpense = {
                id,
                ...data
            };
            expenseObj[id] = newExpense;

            return this.writeFile({ expense: expenseObj }).then(
                () => newExpense
            );
        });
    }
    updateExpenseById(expenseId, data) {
        const expense = this.readFile();
        return expense.then((expenseObj) => {
            if (expenseObj.hasOwnProperty(expenseId)) {
                const updatedExpense = {
                    ...expenseObj[expenseId],
                    ...data
                };
                expenseObj[expenseId] = updateExpense;
                return this.writeFile({ expense: expenseObj }).then(
                    () => updatedExpense
                );
            } else {
                return "Error";
            }
        });
    }
    deleteExpenseById(expenseId) {
        const expense = this.readFile();
        return expense.then((expensesObj) => {
            if (expensesObj.hasOwnProperty(expenseId)) {
                delete expensesObj[expenseId];
                return this.writeFile({ expense: expensesObj }).then(() => {
                    return "An expense was deleted";
                });
            } else {
                return "Error";
            }
        });
    }
}
export const expenseService = new ExpenseService();
