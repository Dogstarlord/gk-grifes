import Footer1 from "@/components/footers/Footer1";
import Header6 from "@/components/headers/Header6";
import Header2 from "@/components/headers/Header2";
import PaymentFailure from "@/components/othersPages/PaymentFailure";
import React from "react";

export const metadata = {
  title: "Payment Failure || ImunoPump",
  description: "ImunoPump",
};
export default function Page() {
  return (
    <>
      <Header6 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Payment Failure</div>
        </div>
      </div>

      <PaymentFailure />
      <Footer1 />
    </>
  );
}
