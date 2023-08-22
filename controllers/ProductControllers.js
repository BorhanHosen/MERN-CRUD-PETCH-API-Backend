import ProductModel from "../models/ProductModel.js";

class ProductController {
  static CreateProduct = async (req, res) => {
    try {
      console.log(req.body);
      const { ProductName, ProductCategory, ProductPrice, ProductDescription } =
        req.body;
      const ProductData = new ProductModel({
        ProductName: ProductName,
        ProductCategory: ProductCategory,
        ProductPrice: ProductPrice,
        ProductDescription: ProductDescription,
      });
      await ProductData.save();
      res.send(ProductData);
    } catch (error) {
      console.log(error);
    }
  };

  static GetProducts = async (req, res) => {
    try {
      const Product = await ProductModel.find();
      res.send(Product);
    } catch (error) {
      console.log(error);
    }
  };

  static GetProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const SingleProduct = await ProductModel.findById({ _id: id });
      res.send(SingleProduct);
    } catch (error) {
      console.log(error);
    }
  };

  static UpdateProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const { ProductName, ProductCategory, ProductPrice, ProductDescription } =
        req.body;
      // console.log(id);
      // console.log(req.body);
      const UpdatedData = await ProductModel.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            ProductName: ProductName,
            ProductCategory: ProductCategory,
            ProductPrice: ProductPrice,
            ProductDescription: ProductDescription,
          },
        },
        { new: true }
      );
      res.send(UpdatedData);
    } catch (error) {
      console.log(error);
    }
  };

  static DeleteProductById = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const DeleteProduct = await ProductModel.findByIdAndDelete({ _id: id });
      res.send(DeleteProduct);
    } catch (error) {
      console.log(error);
    }
  };
}

export default ProductController;
