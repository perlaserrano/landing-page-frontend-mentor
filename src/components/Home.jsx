import React from "react";
import Layout from "./Layout";
import { Testimonial } from "./Testimonial";
import { GalleryImagen } from "./GalleryImagen";
import { MainPage } from "./MainPage";


export const Home = () => {
  return (
    <>
      <Layout>
    <MainPage />
    <Testimonial/>
    <GalleryImagen/>
      </Layout>
    </>
  );
};
