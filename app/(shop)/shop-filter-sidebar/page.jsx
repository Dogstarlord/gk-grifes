import Footer1 from "@/components/footers/Footer1";
import Header6 from "@/components/headers/Header6";
import Header2 from "@/components/headers/Header2";
import FilterSidebar from "@/components/shop/FilterSidebar";

import React from "react";

export const metadata = {
  title: "Shop Filter Sidebar || ImunoPump",
  description: "ImunoPump",
};
export default function Page() {
  return (
    <>
      <Header6 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">New Arrival</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>
      <FilterSidebar />
      <Footer1 />
    </>
  );
}
