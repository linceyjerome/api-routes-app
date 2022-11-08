import Head from 'next/head';
import useSWR from 'swr';
import NavBar from './Navbar'
import Footer from './Footer'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function RootLayout({

    children,
}: {
    children: React.ReactNode;
}) {

    const { data, error } = useSWR('/api/info', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>


    return (
        <span>
            <Head>
                <title>KinderGarden</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,700&display=swap" rel="stylesheet" />
            </Head>

            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </span>
    )
}