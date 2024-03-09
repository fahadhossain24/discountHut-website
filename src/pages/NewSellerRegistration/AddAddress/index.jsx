/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../components/Forms/InputField";
import SelectOption from "../../../components/Forms/SelectOptions";
import { useUpdateMutation } from "../../../utils/api";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function AddAddress({
  setCurrentStep,
  setCompleteStep,
  sellerId,
}) {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [districts, setDistricts] = useState([]);
  // form schema
  const schema = yup.object().shape({
    division: yup.string().required("Division is required"),
    area: yup.string().required("Area is required"),
    city: yup.string().required("City is required"),
    shoppingMall: yup.string().required("Shopping mall is required"),
    exactLocation: yup.string().required("Exact Location is required"),
  });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGRlc2hpdC1iZC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDgzMTMzNTksImV4cCI6MTcwODM5OTc1OX0.glk_JbvoFx_fc5oiRlpJdYrHx6jkd8DA4DV_xITdh0M"; // come from cookie

  // dumy division, area, city
  const divisions = [
    "Dhaka",
    "Chattogram",
    "Sylhet",
    "Khulna",
    "Barisal",
    "Rangpur",
    "Rajshahi",
    "Mymansign",
  ];

  const dhakaDistricts = [
    "Dhaka",
    "Gazipur",
    "Kishoreganj",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Tangail",
    "Faridpur",
    "Gopalganj",
    "Madaripur",
    "Rajbari",
    "Shariatpur",
  ];
  const chattogramDistricts = [
    "Chittagong",
    "Brahmanbaria",
    "Comilla",
    "Chandpur",
    "Lakshmipur",
    "	Maijdee",
    "Feni",
    "Khagrachhari",
    "Rangamati",
    "Bandarban",
    "Cox's Bazar",
  ];
  const barisalDistricts = [
    "Barisal",
    "Barguna",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur",
  ];
  const khulnaDistricts = [
    "Bagerhat",
    "Chuadanga",
    "Jashore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
  ];
  const rajshahiDistricts = [
    "Natore",
    "Rajshahi",
    "Sirajganj",
    "Pabna",
    "Bogura",
    "Chapainawabganj",
    "Naogaon",
    "Joypurhat",
  ];
  const rangpurDistricts = [
    "Dinajpur",
    "Kurigram",
    "Gaibandha",
    "Lalmonirhat",
    "Nilphamari",
    "	Panchagarh",
    "Rangpur",
    "Thakurgaon",
  ];
  const mymensinghDistricts = [
    "Mymensingh",
    "Jamalpur",
    "Netrokona",
    "Sherpur",
  ];
  const sylhetDistricts = ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"];

  useEffect(() => {
    switch (selectedDivision) {
      case "Dhaka":
        setDistricts(dhakaDistricts);
        break;
      case "Chattogram":
        setDistricts(chattogramDistricts);
        break;
      case "Sylhet":
        setDistricts(sylhetDistricts);
        break;
      case "Khulna":
        setDistricts(khulnaDistricts);
        break;
      case "Barisal":
        setDistricts(barisalDistricts);
        break;
      case "Rangpur":
        setDistricts(rangpurDistricts);
        break;
      case "Rajshahi":
        setDistricts(rajshahiDistricts);
        break;
      case "Mymansign":
        setDistricts(mymensinghDistricts);
        break;
      default:
        setDistricts(dhakaDistricts);
        break;
    }
  }, [selectedDivision]);

  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sellerAddAddressUpdateMutation = useUpdateMutation(
    "addAddress",
    "/seller/add-address",
    token
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = watch();
    const shopAddress = {
      shopAddress: `${data.exactLocation}, ${data.area}, ${data.division}`,
    };

    const response = await sellerAddAddressUpdateMutation.mutateAsync({
      id: sellerId,
      updatedData: shopAddress,
    });

    if (response.status === 200) {
      setCurrentStep(3);
      setCompleteStep(2);
      toast.success("Please provide identity!");
    } else {
      toast.error("Failed! Try after sometime");
    }
  };
  return (
    <div>
      <h2 className="mt-5 md:text-xl xs:text-md font-bold">Business Address</h2>
      <div className="mt-5">
        <form>
          <div className="flex justify-between">
            <div className="w-[48%]">
              <SelectOption
                label="Select Division"
                name="division"
                options={divisions}
                register={register}
                error={errors?.division}
                setSelectedDivision={setSelectedDivision}
              />
              <InputField
                label="Area"
                name="area"
                register={register}
                error={errors?.area}
                placeholder="Enter your area"
              />
              <InputField
                label="Exact Location"
                name="exactLocation"
                register={register}
                error={errors?.exactLocation}
                placeholder="Ex: D-36, Jakir hossen road"
              />
            </div>
            <div className="w-[48%]">
              <SelectOption
                label="Select City"
                name="city"
                options={districts}
                register={register}
                error={errors?.city}
              />
              <InputField
                label="Shopping Mall Name"
                name="shoppingMallName"
                register={register}
                placeholder="Enter shopping mall name"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 my-3">
            <button
              type="button"
              className="bg-[#ec4f22] text-white py-[2px] px-4 rounded-md hover:bg-orange-700"
              onClick={() => {
                setCurrentStep(1);
                setCompleteStep(0);
              }}
            >
              Back
            </button>
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="bg-[#ec4f22] text-white py-[2px] px-4 rounded-md hover:bg-orange-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
