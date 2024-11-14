import Footer1 from "@/components/footers/Footer1";
import Header6 from "@/components/headers/Header6";
import Header2 from "@/components/headers/Header2";
import Topbar1 from "@/components/headers/Topbar1";
import ProductStyle6 from "@/components/shop/ProductStyle6";
import React from "react";

export const metadata = {
  title: "Product Style 6 || ImunoPump",
  description: "ImunoPump",
};
export default function Page() {
  return (
    <>
      <Topbar1 />
      <Header6 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">New Arrival</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>
      <ProductStyle6 />
      <Footer1 />
    </>
  );
}
