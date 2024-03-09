import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectOption from "../../components/Forms/SelectOptions";
import InputField from "../../components/Forms/InputField";
import RadioField from "../../components/Forms/RadioField";
import ImageUploadField from "../../components/Forms/ImageUploadField";
import DateTimeField from "../../components/Forms/DateTimeField";
import toast from "react-hot-toast";
import Header from "../../components/Header";
import { useCreateMutation, useDataQuery } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
  productName: yup.string().required("Product Name is required"),
  price: yup.number().required("Price is required"),
  discountType: yup.string().required("Discount Type is required"),
  discount: yup.number().required("Discount is required"),
  brand: yup.string().required("Brand is required"),
  category: yup.string().required("Category is required"),
  subCategory: yup.string().required("Subcategory is required"),
  startDate: yup.date().required("Start Date is required"),
  endDate: yup.date().required("End Date is required"),
  image: yup.mixed().test("imageRequired", "Image is required", (value) => {
    return value && value.length > 0;
  }),
});

const discountTypes = ["percentage", "fixed"];

export default function NewDiscount() {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjdAMi5jb20iLCJyb2xlIjoic2VsbGVyIiwiaWF0IjoxNzA3ODgzNzQ5LCJleHAiOjE3MDc5NzAxNDl9.XTPBSXabCcx6V1aiPvT4G3SXiiWi2t2HIFwu8qGmCgE";
  const sellerId = "65b0e4bb6b93ad4b0bee8734";

  const navigate = useNavigate();

  const { data: brandData } = useDataQuery("brands", "/brand");
  const { data: categoryData } = useDataQuery(
    "categories",
    "/category/all",
    token
  );
  const { data: subCategoryData } = useDataQuery(
    "subCategories",
    "/category/sub/all",
    token
  );

  useEffect(() => {
    setBrands(brandData?.data?.brands);
    setCategories(categoryData?.data?.data);
    setSubCategories(subCategoryData?.data?.data);
  }, [brandData, categoryData, subCategoryData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      brand: "",
      category: "",
      subCategory: "",
    },
  });

  const postDiscountMutation = useCreateMutation(
    "discount",
    "/discount",
    token
  );

  const onSubmit = async (data) => {
    // console.log(data);

    const formData = new FormData();
    const payload = {
      image: data.image[0],
      brand_id: data.brand,
      category_id: data.category,
      subcategory_id: data.subCategory,
      description: data.description,
      discount: parseInt(data.discount),
      discount_type: data.discountType,
      start_datetime: data.startDate,
      end_datetime: data.endDate,
      price: parseInt(data.price),
      product_name: data.productName,
      seller_id: sellerId,
    };

    for (let key in payload) {
      formData.append(key, payload[key]);
    }

    const response = await postDiscountMutation.mutateAsync(formData);
    // console.log(response);

    if (response.status === 201) {
      navigate("/manage-discount");
      toast.success("New discount post successfull. Please wait for approved!");
    } else {
      toast.success("Failed to post new discount!");
    }
  };

  return (
    <div>
      <Header headerTitle="Post a discount" />
      <div className="max-w-2xl mx-auto mt-6 px-6 py-4 bg-white rounded shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Product Name"
              name="productName"
              register={register}
              error={errors?.productName}
            />
            <InputField
              label="Price"
              name="price"
              register={register}
              error={errors?.price}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <RadioField
              label="Discount Type"
              name="discountType"
              options={discountTypes}
              register={register}
              error={errors.discountType}
            />
            <InputField
              label="Discount Rate"
              name="discount"
              register={register}
              error={errors?.discount}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SelectOption
              label="Brand"
              name="brand"
              options={brands}
              register={register}
              error={errors.brand}
            />

            <SelectOption
              label="Category"
              name="category"
              options={categories}
              register={register}
              error={errors.category}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SelectOption
              label="Subcategory"
              name="subCategory"
              options={subCategories}
              register={register}
              error={errors.subCategory}
            />

            <ImageUploadField
              label="Upload Image"
              name="image"
              register={register}
              error={errors.image}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <DateTimeField
              label="Start Date & Time"
              name="startDate"
              register={register}
              error={errors.startDate}
            />
            <DateTimeField
              label="End Date & Time"
              name="endDate"
              register={register}
              error={errors.endDate}
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700">
              Product Description <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("description")}
              className="border p-2 w-full"
              rows="1"
            ></textarea>
            <p className="text-red-500">
              {errors.description?.message?.split("type")[0]}
            </p>
          </div>

          <button
            type="submit"
            className="btn bg-[#ec4f22] text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
