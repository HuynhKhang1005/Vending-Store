/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts , getAllOrder } from "../api";
import { setAllProducts } from "../context/actions/productActions";

import { CChart } from "@coreui/react-chartjs";

const DBHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [orderData, setOrderData] = useState(null);

  const drinks = products?.filter((item) => item.product_category === "drinks");
  const snack = products?.filter((item) => item.product_category === "snack");
  const fruits = products?.filter((item) => item.product_category === "fruits");
  const candy = products?.filter((item) => item.product_category === "candy");

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, [dispatch, products]);

  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="flex items-center justify-center">
          <div className="w-340 md:w-508">
            <CChart
              type="bar"
              data={{
                labels: [
                  "Nước",
                  "Snack",
                  "Fruits",
                  "Kẹo",
                  
                ],
                datasets: [
                  {
                    label: "Sản phẩm có",
                    backgroundColor: "#f87979",
                    data: [
                      drinks?.length,
                      snack?.length,
                      fruits?.length,
                      candy?.length,
                      
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-275 md:w-460">
            <CChart
              type="doughnut"
              data={{
                labels: orderData ? orderData.map(order => order.product_category) : [],
                datasets: [
                  {
                    backgroundColor: [
                      "#51FF00",
                      "#00B6FF",
                      "#f010101",
                    ],
                    data: [
                      drinks?.length,
                      snack?.length,
                      fruits?.length,
                      candy?.length,   
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHome;
