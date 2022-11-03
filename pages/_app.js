import '../styles/globals.css';
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Layout>
      <Component {...pageProps} />
    </Layout>

    <script src="../path/to/flowbite/dist/flowbite.js"></script>

  </>
  )
}

