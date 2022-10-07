import '../styles/globals.css';
import PropTypes from "prop-types";

export default function MyApp({ Component, pageProps }) {
  return (<>

    <Component {...pageProps} /><script src="../path/to/flowbite/dist/flowbite.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
  </>
  )
}

