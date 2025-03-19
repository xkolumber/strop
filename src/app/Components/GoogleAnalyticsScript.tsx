import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        id="my-script1"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16937406357"
      />
      <Script id="my-script2">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16937406357');`}
      </Script>

      <Script id="my-conversion-script">
        {`gtag('event', 'conversion', {
            'send_to': 'AW-16937406357/pEQoCNOKsqwaEJWfsYw_',
            'value': 1.0,
            'currency': 'EUR'
          });`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
