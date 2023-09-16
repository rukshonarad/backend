import { customers, products, orders } from "../data.js";
import { validate, v4 as uuid } from "uuid";

class CustomersController {
    getAllCustomers = (req, res) => {
        const customerList = Object.values(customers);
        res.status(200).json({ data: customerList });
    };

    getCustomerById = (req, res) => {
        const customerId = req.params.customerId;

        if (!validate(customerId) || !customers[customerId]) {
            return res.status(400).json({ message: "Not a valid customer ID" });
        }

        res.status(200).json({ data: customers[customerId] });
    };

    createCustomer = (req, res) => {
        const data = req.body;
        const id = uuid;

        const customer = {
            id,
            ...data
        };
        customers[id] = customer;

        res.status(201).json({ data: customer });
    };

    updateCustomerById = (req, res) => {
        const customerId = req.params.customerId;
        const updatedData = req.body;

        if (!validate(customerId) || !customers[customerId]) {
            return res.status(400).json({ message: "Not a valid customer ID" });
        }

        customers[customerId] = { ...customerId[customerId], updatedData };

        res.status(200).json({ data: customers[customerId] });
    };

    deleteCustomerById = (req, res) => {
        const customerId = req.params.customerId;

        if (!validate(customerId) || !customers[customerId]) {
            return res.status(400).json({ message: "Not a valid customer ID" });
        }

        delete customers[customerId];
        res.status(204).send();
    };
}

// Products Endpoint
class ProductsController {
    getAllProduct = (res) => {
        let products = Object.values(products);

        res.status(200).json(products);
    };

    getProductById = (req, res) => {
        const productsId = req.params.productsId;

        if (!validate(productsId) || !products[productsId]) {
            return res.status(400).json({ message: "Not a valid product ID" });
        }

        res.status(200).json({ data: products[productsId] });
    };

    creataProduct = (req, res) => {
        const data = req.body;
        const id = uuid;

        const product = {
            id,
            ...data
        };

        products[id] = product;

        res.status(201).json({ data: product });
    };

    updateProductById = (req, res) => {
        const productsId = req.params.productsId;
        const updatedData = req.body;

        if (!validate(productsId) || !products[productsId]) {
            return res.status(400).json({ message: "Not a valid product ID" });
        }

        products[productsId] = {
            ...products[productsId],
            updatedData
        };

        res.status(200).json({ data: products[productsId] });
    };

    deleteProductById = (req, res) => {
        const productsId = req.params.productsId;

        if (!validate(productsId) || !products[productsId]) {
            return res.status(400).json({ message: "Not a valid product ID" });
        }

        delete products[productsId];

        res.status(204).send();
    };
}

// Orders Endpoint
class OrdersController {
    getAllOrder = (res) => {
        let orders = Object.values(orders);

        res.status(200).json({ data: orders });
    };

    getOrderById = (req, res) => {
        const ordersId = req.params.ordersId;

        if (!validate(ordersId) || !orders[ordersId]) {
            return res.status(400).json({ message: "Not a valid order ID" });
        }

        res.status(200).json({ data: orders[ordersId] });
    };

    createOrder = (req, res) => {
        const { customerId, productIds } = req.body;

        if (
            !validate(customerId) ||
            !customers[customerId] ||
            !Array.isArray(productIds) ||
            productIds.some(
                (productId) => !validate(productId) || !products[productId]
            )
        ) {
            return res
                .status(400)
                .json({ message: "Invalid customerId or productIds" });
        }

        const id = uuid;

        const order = {
            id,
            customerId,
            productIds
        };

        orders[id] = order;

        res.status(201).json({ data: order });
    };

    updateOrderById = (req, res) => {
        const ordersId = req.params.ordersId;
        const updatedData = req.body;

        if (!validate(ordersId) || !order[ordersId]) {
            return res.status(400).json({ message: "Not a valid order ID" });
        }

        orders[ordersId] = {
            ...orders[ordersId],
            updatedData
        };

        res.status(200).json({ data: orders[ordersId] });
    };

    deleteOrderById = (req, res) => {
        const ordersId = req.params.ordersId;

        if (!validate(ordersId) || !orders[ordersId]) {
            return res.status(400).json({ message: "Not a valid order ID" });
        }

        delete orders[ordersId];
        res.status(204).send();
    };
}

export const customerController = new CustomersController();
export const productController = new ProductsController();
export const orderController = new OrdersController();
