import { motion } from "framer-motion";
import React from "react";

import { buttonClcik, staggerFadeInOut } from "../animations";
import { getAllOrder, updateOrderSts } from "../api";
import { setOrders } from "../context/actions/ordersAction";
import { useDispatch } from "react-redux";

const OrderData = ({ index, data, admin }) => {
  const dispatch = useDispatch();

const handleClick = (orderId, sts) => {
  updateOrderSts(orderId, sts).then((response) => {
    // Đặt timeout cho 3 giây trước khi lấy tất cả đơn hàng mới
    setTimeout(() => {
      getAllOrder().then((data) => {
        dispatch(setOrders(data));
      });
    }, 3000); // 3000 milliseconds = 3 seconds
  });
};


  return (
    <motion.div
      {...staggerFadeInOut(index)}
      className="w-full flex flex-col items-start justify-start px-3 py-2 border relative border-gray-300 bg-lightOverlay drop-shadow-md rounded-md gap-4"
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl text-headingColor font-semibold">Đơn hàng</h1>

        <div className=" flex items-center gap-4">
          <p className="flex items-center gap-1 text-textColor">
           Giá :<span className="text-headingColor font-bold">{data?.total}</span>
           {" "} VND
          </p>

         <p className="px-2 py-[2px] text-sm text-headingColor font-semibold capitalize  rounded-md bg-emerald-400 drop-shadow-md">
            {data?.status}
          </p>

          <p
            className={`text-base font-semibold capitalize border border-gray-300 px-2 py-[2px] rounded-md 
            ${
              (data.sts === "Đã nhận hàng" && "text-emerald-500 bg-emerald-100")
            }`}
          >
            {data?.sts}
          </p>

          {admin && (
            <div className="flex items-center justify-center gap-2">
              <p className="text-lg font-semibold text-headingColor">Đánh dấu:</p>


              <motion.p
                {...buttonClcik}
                onClick={() => handleClick(data.orderId, "Đã nhận hàng")}
                className={`text-emerald-500 text-base font-semibold capitalize border border-gray-300 px-2 py-[2px] rounded-md cursor-pointer`}
              >
                Đã nhận hàng
              </motion.p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-start flex-wrap w-full">
        <div className="flex items-center justify-center gap-4">
          {data?.items &&
            data.items.map((item, j) => (
              <motion.div
                {...staggerFadeInOut(j)}
                key={j}
                className="flex items-center justify-center gap-1"
              >
                <img
                  src={item.imageURL}
                  className="w-10 h-10 object-contain"
                  alt=""
                />

                <div className="flex items-start flex-col">
                  <p className="text-base font-semibold text-headingColor">
                    {item.product_name}
                  </p>
                  <div className="flex items-start gap-2">
                    <p className="text-sm text-textColor">
                      {" "}
                      Số lượng: {item.quantity}
                    </p>
                    <p className="flex items-center gap-[2px] mt-[-1px] text-textColor">  
                    {" "}  
                      Giá:{" "}{parseFloat(item.product_price * item.quantity).toFixed()}{" "}VND
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="flex items-start justify-start flex-col gap-2 px-6 ml-auto w-full md:w-460">
          <h1 className="text-lg text-headingColor font-semibold">
            Tên người mua:{" "}{data.customer.name}
          </h1>

          <p className="text-base text-headingColor -mt-2">
            Email:{" "}{data.customer.email}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderData;
