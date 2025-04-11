import React from "react";
import CrtBanner from "../components/Crt/CrtBanner";
import Layout from "../components/Layout";
import TabSection from "../components/Crt/TabSection";
import SEO from "../components/SEO";

const Crt = () => {
  return (
    <Layout>
      <SEO title="Industry Ready Program " />
      <CrtBanner />
      <TabSection />
    </Layout>
  );
};

export default Crt;
