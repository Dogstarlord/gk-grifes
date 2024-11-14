import Footer1 from "@/components/footers/Footer1";
import Header6 from "@/components/headers/Header6";
import Header2 from "@/components/headers/Header2";
import Login from "@/components/othersPages/Login";
import React from "react";

export const metadata = {
  title: "Login || ImunoPump",
  description: "ImunoPump",
};
export default function Page() {
  return (
    <>
      <Header6 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Log in</div>
        </div>
      </div>

      <Login />
      <Footer1 />
    </>
  );
}
