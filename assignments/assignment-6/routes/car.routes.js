import { Router } from "express";

import { carController } from "../controllers/car.controller.js";
import { validationMiddleware } from "../validation/validation.middleware.js";

const carRouter = Router();

carRouter.get("/", carController.getAllCars);
carRouter.get(
    "/:carId",
    validationMiddleware.validateCarIds,
    carController.getCarById
);
carRouter.post("/", carController.createACar);
carRouter.put(
    "/:carId",
    validationMiddleware.validateCarIds,
    carController.updateCar
);
carRouter.delete(
    "/:carId",
    validationMiddleware.validateCarIds,
    carController.deleteCar
);

export { carRouter };
