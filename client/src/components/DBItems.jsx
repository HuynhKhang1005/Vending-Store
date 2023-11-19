import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAProduct, getAllProducts ,editAProduct} from "../api";
import { DataTable } from "../components";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";
import { setAllProducts } from "../context/actions/productActions";

const DBItems = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [updatedProductData, setUpdatedProductData] = useState({
    product_name: '',
    product_category: '',
    product_price: 0,
    // Add other properties as needed
  });
  const handleInputChange = (fieldName, value) => {
    setUpdatedProductData({
      ...updatedProductData,
      [fieldName]: value,
    });
  };
  return (
    <div className="flex items-center justify-self-center gap-4 pt-6 w-full">
      <DataTable
        columns={[
          {
            title: "Ảnh",
            field: "imageURL",
            render: (rowData) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                src={rowData.imageURL}
                className="w-32 h-16 object-contain rounded-md"
              />
            ),
          },
          {
            title: "Tên",
            field: "product_name",
          },
          {
            title: "Loại",
            field: "product_category",
          },
          {
            title: "Giá",
            field: "product_price",
            render: (rowData) => (
              <p className="text-xl font-semibold text-textColor flex items-center justify-center ">
                {parseFloat(rowData.product_price).toFixed()} VND
              </p>
            ),
          },
        ]}
        data={products}
        title="List of Products"
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Data",
            onClick: (_event, rowData) => {
              if (window.confirm("Bạn chắc chắn muốn sửa hay không")) {
                // Set the initial values to the product's data
                setUpdatedProductData({
                  product_name: rowData.product_name,
                  product_category: rowData.product_category,
                  product_price: rowData.product_price,
                  // Set other properties as needed
                });

                // Prompt user for updated values
                const updatedProductPrice = prompt('Nhập giá mới:', rowData.product_price);

                // Update the product_price in the state
                if (updatedProductPrice !== null) {
                  handleInputChange('product_price', parseFloat(updatedProductPrice));
                }

                // Call editAProduct with updatedProductData
                editAProduct(rowData.productId, updatedProductData).then((res) => {
                  dispatch(alertSuccess("Sản phẩm đã cập nhập"));
                  setTimeout(() => {
                    dispatch(alertNULL());
                  }, 3000);
                  getAllProducts().then((data) => {
                    dispatch(setAllProducts(data));
                  });
                });
              }
            },
          },
          {
            icon: "delete",
            tooltip: "Delete Data",
            onClick: (_event, rowData) => {
              if (
                window.confirm("Bạn chắc chắn muốn xóa hay không")
              ) {
                deleteAProduct(rowData.productId).then((res) => {
                  dispatch(alertSuccess("Sản phẩm đã xóa "));
                  setInterval(() => {
                    dispatch(alertNULL());
                  }, 3000);
                  getAllProducts().then((data) => {
                    dispatch(setAllProducts(data));
                  });
                });
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default DBItems;
