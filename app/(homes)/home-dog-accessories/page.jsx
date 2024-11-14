import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Header6 from "@/components/headers/Header6";

import Topbar1 from "@/components/headers/Topbar1";
import Categories from "@/components/homes/home-dog-accessories/Categories";
import Collection from "@/components/homes/home-dog-accessories/Collection";
import CollectionBanner from "@/components/homes/home-dog-accessories/CollectionBanner";
import Countdown from "@/components/homes/home-dog-accessories/Countdown";
import Hero from "@/components/homes/home-dog-accessories/Hero";
import Lookbook from "@/components/homes/home-dog-accessories/Lookbook";
import Products from "@/components/homes/home-dog-accessories/Products";
import React from "react";

export const metadata = {
  title: "Home Dog Accessories || ImunoPump",
  description: "ImunoPump",
};
export default function Page() {
  return (
    <>
      <Topbar1 />
      <Header6 />
      <Hero />
      <CollectionBanner />
      <Products />
      <Countdown />
      <Collection />

      <Categories />
      <Lookbook />
      <div className="mt-5"></div>
      <Features />
      <Footer1 bgColor="background-gray" />
    </>
  );
}
