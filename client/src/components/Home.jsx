import { motion } from "framer-motion";
import React from "react";
import { buttonClcik, staggerFadeInOut } from "../animations";
// import { LoginBg } from "../assets";
import { randomData } from "../utils/styles";

const Home = () => {
  return (
    <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
      
      <div className="flex flex-col items-start justify-start gap-6">
        

        <p className="text-[40px] text-headingColor md:text-[50px] font-sans font-extrabold tracking-wider">
          Máy bán hàng tự động
          {" "}
          <span className="text-orange-600">của chúng tôi</span>
        </p>

        <p className="text-textColor text-lg">
          Máy bán hàng hay máy bán hàng tự động là một máy tự động cung cấp các mặt hàng như đồ ăn nhẹ, đồ uống, thuốc lá và vé số cho người tiêu dùng sau khi đưa tiền mặt, thẻ tín dụng hoặc thẻ được thiết kế đặc biệt vào máy.
        </p>
        <motion.button
          {...buttonClcik}
          className="bg-gradient-to-bl from-orange-400 to-orange-600 px-4 py-2 rounded-xl text-black text-base font-semibold"
        >
          Mua hàng ngay
        </motion.button>
      </div>

      <div className="py-2 flex-1 flex items-center justify-end relative">
        

        <div className="w-full md:w-auto ml-0 flex flex-wrap items-center justify-center gap-4 gap-y-14">
          {randomData &&
            randomData.map((data, i) => (
              <motion.div
                key={i}
                {...staggerFadeInOut(i)}
                className=" w-32 h-36 md:h-auto  md:w-190 p-4 bg-lightOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={data.imageURL}
                  className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain "
                  alt=""
                />
                <p className="text-sm lg:text-xl font-semibold text-textColor">
                  {data.product_name.slice(0, 14)}
                </p>

                <p className="text-[12px] text-center  md:text-base text-lighttextGray font-semibold  capitalize">
                {data.product_category}
                </p>
                
                <p className="text-sm  font-semibold text-headingColor">
                {data.product_price}
                  {" "}<span className="text-xs text-red-600">VND</span>
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
