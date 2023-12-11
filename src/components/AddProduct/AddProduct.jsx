import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";


export const AddProduct = () => {
  const handleSendPost = async (values) => {
    console.log("start new add fetch");
    try {
      const { data } = await axios.post(
        "https://e-commerce-api-vaqs.onrender.com/api/v1/products",
        values
      );
      console.log("response from add new product", data);

      
      if (data.success) {
        
        formikAddNewProduct.resetForm();
       
      } else {
        console.error("Error adding product:", data.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };

  const validationSchemaNewProduct = Yup.object({
    title: Yup.string().required("Product title is required"),
    slug: Yup.string().required("Slug is required"),
    description: Yup.string().required("Product description is required"),
    price: Yup.number().required("Product price is required"),
    priceAfterDiscount: Yup.number(),
    quantity: Yup.number().required("Product quantity is required"),

    size: Yup.string().oneOf(["xs", "m", "lg", "xxlg", "xlg", "3xlg"]),
    imageCover: Yup.string().required("Product image cover is required"),

    type: Yup.string().oneOf(["men", "child", "woman"]),
    category: Yup.string().required("Product must belong to a category"),

    brand: Yup.string(),
    height: Yup.number(),
    width: Yup.number(),
  });

  let formikAddNewProduct = useFormik({
    initialValues: {
      title: "",
      slug: "",
      description: "",
      price: 0,
      priceAfterDiscount: 0,
      quantity: 0,

      size: "",
      imageCover: "",
      type: "",
      category: "",
      brand: "",
      height: 0,
      width: 0,
    },
    validationSchema: validationSchemaNewProduct,
    onSubmit: (values, { resetForm }) => {
      handleSendPost(values);
      resetForm();
    },
  });

  return (
    <section className="add-task bg-slate-100 text-gray py-8 h-auto">
      {/* <Toaster /> */}
      <div className="container mx-auto px-4">
        <form
          onSubmit={formikAddNewProduct.handleSubmit}
          className="max-w-md mx-auto"
        >
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formikAddNewProduct.values.title}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Title"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.title &&
            formikAddNewProduct.touched.title && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.title}
              </div>
            )}

          <label htmlFor="slug" className="block mb-2">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            value={formikAddNewProduct.values.slug}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Slug"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.slug &&
            formikAddNewProduct.touched.slug && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.slug}
              </div>
            )}

          <label htmlFor="description" className="block mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formikAddNewProduct.values.description}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Description"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.description &&
            formikAddNewProduct.touched.description && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.description}
              </div>
            )}

          <label htmlFor="price" className="block mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formikAddNewProduct.values.price}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Price"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.price &&
            formikAddNewProduct.touched.price && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.price}
              </div>
            )}

          <label htmlFor="priceAfterDiscount" className="block mb-2">
            Price After Discount
          </label>
          <input
            type="number"
            name="priceAfterDiscount"
            value={formikAddNewProduct.values.priceAfterDiscount}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Price After Discount"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.priceAfterDiscount &&
            formikAddNewProduct.touched.priceAfterDiscount && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.priceAfterDiscount}
              </div>
            )}

          <label htmlFor="colors" className="block mb-2">
            Colors
          </label>
          <input
            type="text"
            name="colors"
            value={formikAddNewProduct.values.colors}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Colors (comma-separated)"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.colors &&
            formikAddNewProduct.touched.colors && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.colors}
              </div>
            )}
          <label htmlFor="size" className="block mb-2">
            Size
          </label>
          <select
            name="size"
            value={formikAddNewProduct.values.size}
            onChange={formikAddNewProduct.handleChange}
            className="w-full border-1 shadow-transparent rounded-md px-3 py-2 mb-4"
          >
            <option value="" disabled hidden>
              Select Size
            </option>
            <option value="xs">XS</option>
            <option value="m">M</option>
            <option value="lg">LG</option>
            <option value="xxlg">XXLG</option>
            <option value="xlg">XLG</option>
            <option value="3xlg">3XLG</option>
          </select>
          {formikAddNewProduct.errors.size &&
            formikAddNewProduct.touched.size && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.size}
              </div>
            )}
          <label htmlFor="imageCover" className="block mb-2">
            Image Cover
          </label>
          <input
            type="text"
            name="imageCover"
            value={formikAddNewProduct.values.imageCover}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Image Cover URL"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.imageCover &&
            formikAddNewProduct.touched.imageCover && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.imageCover}
              </div>
            )}
          {/* <label htmlFor="images" className="block mb-2">
            Images
          </label>
          <input
            type="text"
            name="images"
            value={formikAddNewProduct.values.images}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Images (comma-separated URLs)"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.images &&
            formikAddNewProduct.touched.images && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.images}
              </div>
            )} */}
          <label htmlFor="type" className="block mb-2">
            Type
          </label>
          <select
            name="type"
            value={formikAddNewProduct.values.type}
            onChange={formikAddNewProduct.handleChange}
            className="w-full border-1 shadow-transparent rounded-md px-3 py-2 mb-4"
          >
            <option value="" disabled hidden>
              Select Type
            </option>
            <option value="men">Men</option>
            <option value="child">Child</option>
            <option value="woman">Woman</option>
          </select>
          {formikAddNewProduct.errors.type &&
            formikAddNewProduct.touched.type && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.type}
              </div>
            )}
          <label htmlFor="category" className="block mb-2">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formikAddNewProduct.values.category}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Category"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.category &&
            formikAddNewProduct.touched.category && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.category}
              </div>
            )}
          {/* <label htmlFor="subcategory" className="block mb-2">
            Subcategory
          </label>
          <input
            type="text"
            name="subcategory"
            value={formikAddNewProduct.values.subcategory}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Subcategory (comma-separated)"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.subcategory &&
            formikAddNewProduct.touched.subcategory && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.subcategory}
              </div>
            )} */}

          <label htmlFor="brand" className="block mb-2">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            value={formikAddNewProduct.values.brand}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Brand"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.brand &&
            formikAddNewProduct.touched.brand && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.brand}
              </div>
            )}
          <label htmlFor="quantity" className="block mb-2">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={formikAddNewProduct.values.quantity}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Quantity"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.quantity &&
            formikAddNewProduct.touched.quantity && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.quantity}
              </div>
            )}

          <label htmlFor="height" className="block mb-2">
            Height
          </label>
          <input
            type="number"
            name="height"
            value={formikAddNewProduct.values.height}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product Height"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.height &&
            formikAddNewProduct.touched.height && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.height}
              </div>
            )}

          <label htmlFor="width" className="block mb-2">
            width
          </label>
          <input
            type="number"
            name="width"
            value={formikAddNewProduct.values.width}
            onChange={formikAddNewProduct.handleChange}
            placeholder="Product width"
            className="w-full border-1 rounded-md px-3 py-2 mb-4"
          />
          {formikAddNewProduct.errors.width &&
            formikAddNewProduct.touched.width && (
              <div className="alert alert-danger">
                {formikAddNewProduct.errors.width}
              </div>
            )}

          {/* Repeat similar blocks for other fields */}

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};
