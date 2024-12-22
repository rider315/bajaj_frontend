import React from 'react';
import { Helmet } from 'react-helmet';

const AdSenseScript = () => (
  <Helmet>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5961860437142000"
      crossOrigin="anonymous"
    ></script>
  </Helmet>
);


export default AdSenseScript;


