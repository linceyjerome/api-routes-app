import '../styles/globals.css';
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>

      <Layout>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,700&display=swap" rel="stylesheet" />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

