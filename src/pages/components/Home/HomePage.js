import React from "react";
import Navbar from "../Navbar";
import Layout from "./Layout";
import Footer from "../Footer";
import HireMEFullComponent from "../HireMEFullComponent";
import TransitionEffects from "../TransitionEffects";

function HomePage() {
  return (
    <>
      <Navbar />
      <TransitionEffects />
      <Layout />

      <Footer />
    </>
  );
}

export default HomePage;
