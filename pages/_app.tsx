import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Theme from "../theme";
import { useRouter } from "next/router";
import Script from "next/script";

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider theme={Theme}>
        {mounted && <Component {...pageProps} />}
      </ChakraProvider>
      {mounted && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=UA-142424170-7`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-142424170-7', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <Script
            id="hotjar"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:2181269,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />
        </>
      )}
    </>
  );
};

export default MyApp;
