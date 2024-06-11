import React from "react";
import { MediumPage } from "./MediumPage";
import { Testimonial } from "./Testimonial";
import Layout from "./Layout";





export const Home = () => {
  return (
    <>
      <Layout>
    <MediumPage />
    <Testimonial/>
      </Layout>
    </>
  );
};
