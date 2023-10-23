import "../scss/app.scss";
import { Fragment, useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
