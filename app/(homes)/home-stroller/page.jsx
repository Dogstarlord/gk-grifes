import Footer1 from "@/components/footers/Footer1";
import Header18 from "@/components/headers/Header18";
import Header9 from "@/components/headers/Header9";
import Announcment from "@/components/homes/home-stroller/Announcment";
import Banner from "@/components/homes/home-stroller/Banner";
import Brands from "@/components/homes/home-stroller/Brands";
import Categories from "@/components/homes/home-stroller/Categories";
import Faqs from "@/components/homes/home-stroller/Faqs";
import Features from "@/components/homes/home-stroller/Features";
import Features2 from "@/components/homes/home-stroller/Features2";
import Hero from "@/components/homes/home-stroller/Hero";
import Products from "@/components/homes/home-stroller/Products";
import Testimonials from "@/components/homes/home-stroller/Testimonials";
import React from "react";

export const metadata = {
  title: "Home Stroller || VKLTech",
  description: "VKLTech",
};
export default function Page() {
  return (
    <>
      <Announcment />
      <Header18 />
      <Hero />
      <Features />
      <Categories />
      <Banner />
      <Brands />
      <Products />
      <Features2 />
      <Faqs />
      <Testimonials />
      <Footer1 />
    </>
  );
}
