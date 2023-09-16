import { Router } from "express";

import {
    customerController,
    productController,
    orderController
} from "../controllers/comany.controller.js";

const companyRouter = Router();

companyRouter.get("/", customerController.getAllCustomers);
companyRouter.get("/:customersId", customerController.getCustomerById);
companyRouter.put("/", customerController.createCustomer);
companyRouter.put("/:customersId", customerController.updateCustomerById);
companyRouter.delete("/:customersId", customerController.deleteCustomerById);

/// Product
companyRouter.get("/", productController.getAllProduct);
companyRouter.get("/:productId", productController.getProductById);
companyRouter.put("/", productController.createProduct);
companyRouter.put("/:productId", productController.updateProductById);
companyRouter.delete("/:productId", productController.deleteProductById);

//Order
companyRouter.get("/", orderController.getAllOrder);
companyRouter.get("/:productId", orderController.getOrderById);
companyRouter.put("/", orderController.createOrder);
companyRouter.put("/:productId", orderController.updateOrderById);
companyRouter.delete("/:productId", orderController.deleteOrderById);
export { companyRouter };
