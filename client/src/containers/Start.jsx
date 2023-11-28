import React from 'react'
import { motion } from "framer-motion";
import { buttonClcik } from "../animations";
import { LoginBg } from '../assets';
import { NavLink } from 'react-router-dom';

const Start = () => {
  return (
    <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">   
        <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      {/* ảnh nền */}
            <img
                src={LoginBg}
                className="w-full h-full object-cover absolute top-0 left-0"
                alt=""
            />
            <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-880 h-5/6 z-10 backdrop-blur-md p-4 px-4 py-12 gap-6 m-28 rounded-md">

                <p className="text-[40px] text-headingColor md:text-[50px] font-sans font-extrabold tracking-wider">
                Máy bán hàng tự động
                {" "}
                <span className="text-orange-600">của chúng tôi</span>
                </p>

                <p className="text-textColor text-xl">
                Máy bán hàng hay máy bán hàng tự động là một máy tự động cung cấp các mặt hàng như đồ ăn nhẹ, đồ uống, thuốc lá và vé số cho người tiêu dùng sau khi đưa tiền mặt, thẻ tín dụng hoặc thẻ được thiết kế đặc biệt vào máy.
                  </p>
                  
                <motion.div {...buttonClcik} className='flex items-center justify-around px-15 py-8 p-4 gap-16'>
                    <NavLink
                        to={"/menu"}
                        className="flex items-center justify-center gap-4 cursor-pointer text-2xl text-orange-600 font-semibold px-4 py-2 rounded-md border border-gray-300 hover:shadow-md bg-yellow-300"
                    >
                    Mua hàng ngay
                    </NavLink>
                    <NavLink
                        to={"/login"}
                        className="flex items-center justify-center gap-4 cursor-pointer text-2xl text-orange-600 font-semibold px-4 py-2 rounded-md border border-gray-300 hover:shadow-md bg-yellow-300 "
                    >
                    Đăng nhập để tích điểm
                    </NavLink>
                </motion.div>
                
                
            </div>
        </div>
    </motion.div>
  )
}

export default Start
