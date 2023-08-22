import express from "express";
import ProductController from "../controllers/ProductControllers.js";
const router = express.Router();

router.post("/CreateProduct", ProductController.CreateProduct);
router.get("/GetProducts", ProductController.GetProducts);
router.get("/GetProduct/:id", ProductController.GetProductById);
router.put("/UpdateProduct/:id", ProductController.UpdateProductById);
router.delete("/DeleteProduct/:id", ProductController.DeleteProductById);

export default router;
