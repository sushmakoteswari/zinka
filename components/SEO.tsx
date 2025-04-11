import React from "react";
import Head from "next/head";

interface SEOProps {
  title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title} | zinka.me</title>
        <meta property="og:site_name" content="zinka.me" />
        <meta property="og:title" content={`${title} | zinka.me`} />
        <meta
          property="og:description"
          content="First platform in India for management students. We work on only one point to make you industry ready."
        />
        <meta
          property="og:image:secure_url"
          content="/images/socialimage.jpeg"
        />
        <meta property="og:image" content="/images/socialimage.jpeg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="442" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:image" content="/images/socialimage.jpeg" />
        <meta name="twitter:image:width" content="280" />
        <meta name="twitter:image:height" content="480" />
      </Head>
    </>
  );
};

export default SEO;
