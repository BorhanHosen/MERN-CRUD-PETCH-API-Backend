import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  ProductName: { type: String, required: true },
  ProductCategory: { type: String, required: true },
  ProductPrice: { type: String, required: true },
  ProductDescription: { type: String, required: true },
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
