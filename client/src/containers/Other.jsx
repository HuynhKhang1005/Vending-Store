/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { Cart, FilterSection, Header, Home, HomeSLider } from "../components";
import { setAllProducts } from "../context/actions/productActions";

const Other = () => {
  const products = useSelector((state) => state.products);
  const isCart = useSelector((state) => state.isCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
        <Header />
      
        <div className="w-full flex flex-col items-center justify-center mt-60 px-6 md:px-24 2xl:px-96 gap-12 pb-24 text-3xl">
        
        <h1 className="text-[72px] text-headingColor font-bold">Đang cập nhật</h1>
      </div>
    
    </main>
  );
};

export default Other;
