import Features from "@/components/common/Features";
import ShopGram from "@/components/common/ShopGram";
import Footer1 from "@/components/footers/Footer1";
import Header18 from "@/components/headers/Header18";
import Categories from "@/components/homes/home-3/Categories";
import Countdown from "@/components/homes/home-3/Countdown";
import Hero from "@/components/homes/home-3/Hero";
import Products from "@/components/homes/home-3/Products";
import Products2 from "@/components/homes/home-3/Products2";
import Testimonials from "@/components/homes/home-3/Testimonials";
import VideoBanner from "@/components/homes/home-3/VideoBanner";
import React from "react";

export const metadata = {
  title: "Home 3 || PatyGirls",
  description: "PatyGirls",
};
export default function Page() {
  return (
    <>
      <Header18 />
      <Hero />
      <Countdown />
      <Products />
      <Categories />
      <Products2 />
      <VideoBanner />
      <Testimonials />
      <div className="mt-5"></div>
      <ShopGram />
      <Features />
      <Footer1 />
    </>
  );
}
