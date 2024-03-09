/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import DynamicTable from "../../../components/DynamicTable";
import { useState } from "react";
import DynamicModal from "../../../components/Modal";
import Loader from "../../../components/Loader";
import { useDeleteMutation } from "../../../utils/api";

export default function DiscountManageTable({
  filterItem,
  searchText,
  discounts,
  isLoading,
  error,
}) {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [showmoreModalData, setShowmoreModalData] = useState({});
  const [sellingProductQuantityModal, setSellingProductQuantityModal] =
    useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjdAMi5jb20iLCJyb2xlIjoic2VsbGVyIiwiaWF0IjoxNzA3ODgzNzQ5LCJleHAiOjE3MDc5NzAxNDl9.XTPBSXabCcx6V1aiPvT4G3SXiiWi2t2HIFwu8qGmCgE";

  const discountDeleteMutation = useDeleteMutation(
    "discounts",
    "/discount",
    token
  );

  const colomns = [
    { key: "product", label: "Product" },
    { key: "price", label: "Price" },
    { key: "discount", label: "Discount" },
    { key: "end_datetime", label: "End Date & Time" },
    { key: "status", label: "Status" },
  ];

  // filter discount by status -> filterItem
  let filteredDiscountData =
    filterItem === "all"
      ? discounts
      : discounts?.filter((item) => item?.status === filterItem);

  // search discount
  const searchDiscountData = filteredDiscountData?.filter(
    (item) =>
      item.product_name.toLocaleLowerCase().includes(searchText) ||
      item.discount.toString().includes(searchText)
  );

  // assign discount data to filteredDiscountData array based on search text
  if (searchDiscountData?.length !== 0) {
    filteredDiscountData = searchDiscountData;
  } else {
    filteredDiscountData = [];
  }

  // throw error when search result not match
  if (searchText && filteredDiscountData?.length === 0)
    toast.error("No result match!");

  // show more about discount event handler
  const showMore = (item) => {
    setSellingProductQuantityModal(false);
    openModal();
    setShowmoreModalData(item);
  };

  // delete discount event handler
  const deleteDiscount = async (...ids) => {
    const deleteableIds = [...ids];
    if (confirm("Are you sure, You want to delete the discount?")) {
      // console.log("delete the discount", deleteableIds);
      const response = await discountDeleteMutation.mutateAsync(deleteableIds);
      if (response?.length > 0) {
        toast.success("Delete successfull!");
      } else {
        toast.error("Delete failed!");
      }
    } else {
      toast("You didn't delete the discount.");
    }
  };

  const windowWidth = window.innerWidth;

  // modal style
  const modalCustomStyles = {
    content: {
      width:
        windowWidth <= 500
          ? "80%"
          : windowWidth > 500 && windowWidth <= 1000
          ? "60%"
          : windowWidth > 1000 && windowWidth <= 1300
          ? "50%"
          : "35%",
      height: sellingProductQuantityModal
        ? "32%"
        : windowWidth > 1300
        ? "320px"
        : "50%",
      margin: "auto",
      border: "1px solid #ec4f22",
      borderRadius: "4px",
      padding: "0px",
    },
  };

  const discountTimeStamp = {
    startDate: new Date(
      showmoreModalData?.start_datetime?.split("T")[0]
    ).toLocaleDateString("en-US"),
    startTime: new Date(
      "1970-01-01T" + showmoreModalData?.start_datetime?.split("T")[1]
    ).toLocaleTimeString("en-US", {
      minute: "numeric",
      hour: "numeric",
    }),
    endDate: new Date(
      showmoreModalData?.end_datetime?.split("T")[0]
    ).toLocaleDateString("en-US"),
    endTime: new Date(
      "1970-01-01T" + showmoreModalData?.end_datetime?.split("T")[1]
    ).toLocaleTimeString("en-US", {
      minute: "numeric",
      hour: "numeric",
    }),
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDiscountBulkDelete = () => {
    deleteDiscount(...selectedIds);
  };

  // console.log(showmoreModalData);
  // console.log(sellingProductQuantityModal);

  return (
    <div>
      <div className={`relative ${isLoading && "mt-52 xs:mr-16"}`}>
        {isLoading ? (
          <Loader />
        ) : (
          !error && (
            <DynamicTable
              columns={colomns}
              data={filteredDiscountData}
              showMore={showMore}
              deleteDiscount={deleteDiscount}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
          )
        )}
      </div>
      {error && (
        <div className="flex justify-center h-[300px] items-center">
          You have no discount. Please post one!
        </div>
      )}

      <DynamicModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        customStyle={modalCustomStyles}
        content={
          Object.keys(showmoreModalData).length > 0 && (
            <div>
              <div className="w-full h-5 bg-[#ec4f22]"></div>
              <div>
                <div className="p-2">
                  <h2 className="text-2xl font-bold pb-2 text-[#ec4f22]">
                    {showmoreModalData.status === "approved"
                      ? "Approved Discount"
                      : showmoreModalData.status === "pending"
                      ? "Pending Discount"
                      : "Deleted Discount"}{" "}
                    - {showmoreModalData.product_name}
                  </h2>
                  <div className="font-semibold">
                    <h2>Product name: {showmoreModalData.product_name}</h2>
                    <h2>Band: {showmoreModalData.brand_id?.brandName}</h2>
                    <h2>Category: {showmoreModalData.category_id?.name}</h2>
                    <h2>
                      Sub category: {showmoreModalData.subcategory_id?.name}
                    </h2>
                    <h2>Product price: {showmoreModalData.price} tk</h2>
                    <h2>Discount type: {showmoreModalData.discount_type}</h2>
                    <h2>
                      Discount: {showmoreModalData.discount}{" "}
                      {showmoreModalData.discount_type === "percentage"
                        ? "%"
                        : "tk"}
                    </h2>
                    <h2>
                      Started at: {discountTimeStamp.startDate}
                      {" - "}
                      {discountTimeStamp.startTime}
                    </h2>
                    <h2>
                      End at: {discountTimeStamp.endDate} {" - "}
                      {discountTimeStamp.endTime}
                    </h2>
                    <h2>Description: {showmoreModalData.description}</h2>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      />
      {selectedIds.length > 0 && (
        <div className="w-full flex justify-end py-4">
          <button
            type="button"
            className="px-3 py-[3px] bg-[#ec4f22] text-white mr-6 hover:bg-orange-700"
            onClick={handleDiscountBulkDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
