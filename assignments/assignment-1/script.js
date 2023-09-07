const { log } = require("console");
const fs = require("fs");
const { domainToASCII } = require("url");
class FinancialAnalytics {
    readFile() {
        const content = fs.readFileSync("data.json", "utf-8");
        return JSON.parse(content);
    }
    writeFile(data) {
        fs.writeFileSync("data.json", JSON.stringify(data));
    }
    readJSONData(filename, dataCallback, writeCallback) {
        fs.readFile(filename, "utf8", (err, rawData) => {
            if (err) {
                throw Error("Somthink wrong");
            }
            const jsonData = JSON.parse(rawData);
            const transformedData = dataCallback(jsonData);
            writeCallback(transformedData);

            const updateData = FinancialAnalytics(transformedData);
        });
    }

    calculateMonthlySavings(content) {
        const dataObj = content;
        let total = 0;
        for (const month in dataObj) {
            const expensisCategory = dataObj[month];
            for (const category in expensisCategory) {
                total += expensisCategory[category];
            }
        }
        const savings = total;
        return { expenses: total, savings };
        fs.writeFile("data.json".JSON.stringify(dataObj));
    }
}

const data = new FinancialAnalytics();
console.log(data.readFile());
// console.log(data.readJSONData());
console.log(data.calculateMonthlySavings("data.json", data.readFile));
