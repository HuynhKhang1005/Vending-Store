/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts , getAllOrder } from "../api";
import { setAllProducts } from "../context/actions/productActions";

import { CChart } from "@coreui/react-chartjs";


const DBHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();


  const drinks = products?.filter((item) => item.product_category === "drinks");
  const snack = products?.filter((item) => item.product_category === "snack");
  const noodles = products?.filter((item) => item.product_category === "noodles");
  const candy = products?.filter((item) => item.product_category === "candy");
  const cake = products?.filter((item) => item.product_category === "cake");

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
                  "Mì",
                  "Kẹo",
                  "Bánh",
                  
                ],
                datasets: [
                  {
                    label: "Sản phẩm có",
                    backgroundColor: "#f87979",
                    data: [
                      drinks?.length,
                      snack?.length,
                      noodles?.length,
                      candy?.length,
                      cake?.length,
                      
                    ],
                    
                  },
                ],
              }}
              labels="months"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHome;
