import Footer4 from "@/components/footers/Footer4";

import Header18 from "@/components/headers/Header18";
import Brands from "@/components/homes/home-1/Brands";
import Features from "@/components/homes/home-6/Features";
import Banner from "@/components/homes/home-skateboard/Banner";
import Categories from "@/components/homes/home-skateboard/Categories";
import Collections from "@/components/homes/home-skateboard/Collections";
import Hero from "@/components/homes/home-skateboard/Hero";
import Marquee from "@/components/homes/home-skateboard/Marquee";
import Products from "@/components/homes/home-skateboard/Products";
import Products2 from "@/components/homes/home-skateboard/Products2";
import Testimonials from "@/components/homes/home-skateboard/Testimonials";
import React from "react";

export const metadata = {
  title: "Home Skateboard || VKLTech",
  description: "VKLTech",
};
export default function Page() {
  return (
    <>
      <Header18 />

      <Hero />
      <Marquee />
      <Collections />
      <div className="mt-5"></div>
      <Brands />
      <Categories />
      <Products />
      <Banner />
      <Products2 />
      <Testimonials />
      <Features />
      <Footer4 />
    </>
  );
}
