import Announcement from "@/components/common/Announcement";
import Footer1 from "@/components/footers/Footer1";
import Header10 from "@/components/headers/Header10";
import Header6 from "@/components/headers/Header6";

import Header9 from "@/components/headers/Header9";
import Categories from "@/components/homes/home-decor/Categories";
import Collcetion2 from "@/components/homes/home-decor/Collcetion2";
import Collections from "@/components/homes/home-decor/Collections";
import Hero from "@/components/homes/home-decor/Hero";
import Products from "@/components/homes/home-decor/Products";
import Products2 from "@/components/homes/home-decor/Products2";
import TestimonialSection from "@/components/homes/home-decor/Testimonials";

import React from "react";

export const metadata = {
  title: "Home Decor || ImunoPump",
  description: "ImunoPump",
};
export default function Page() {
  return (
    <>
      <div className="color-primary-2">
        <Announcement bgColor={"bg_brown-1"} />
        <Header6 />
        <Hero /> <Collections />
        <Products />
        <Categories />
        <Products2 />
        <Collcetion2 />
        <TestimonialSection />
        <Footer1 />
      </div>
    </>
  );
}
