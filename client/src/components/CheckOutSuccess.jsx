// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { FaArrowLeft } from "../assets/icons";
import { NavLink } from "react-router-dom";
import { Bill } from "../assets";
import { Header } from "../components";
import { motion } from "framer-motion";
import { buttonClcik } from "../animations";

const CheckOutSuccess = () => {
  return (
    <main className=" w-screen min-h-screen flex items-center justify-start flex-col">
      <Header />
      <div className="w-full flex flex-col items-center justify-center mt-20 px-6 md:px-24 2xl:px-80 gap-8 pb-16">
        <img src={Bill} className="w-full md:w-340" alt="" />

        <h1 className="text-[30px] text-headingColor font-bold">
          Thanh toán thành công 
        </h1>
        <h5 className="text-[20px] text-yellow-400 font-bold">
          Vui lòng chờ nhận hàng !!
        </h5>

        <motion.div {...buttonClcik}>
          <NavLink
            to={"/menu"}
            className="flex items-center justify-center gap-4 cursor-pointer text-2xl text-textColor font-semibold px-4 py-2 rounded-md border border-gray-300 hover:shadow-md"
          >
            <FaArrowLeft className="text-3xl text-textColor " /> Quay về trang chủ
          </NavLink>
        </motion.div>
      </div>
    </main>
  );
};

export default CheckOutSuccess;
