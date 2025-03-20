import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        id="my-script1"
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16937406357"
      />

      <Script id="my-script2" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16937406357');
        `}
      </Script>

      <Script id="my-conversion-script" strategy="afterInteractive">
        {`
          window.addEventListener('load', () => {
            if (window.gtag) {
              gtag('event', 'conversion', {
                'send_to': 'AW-16937406357/pEQoCNOKsqwaEJWfsYw_',
                'value': 1.0,
                'currency': 'EUR'
              });
            } else {
              console.error('gtag is not defined yet');
            }
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
