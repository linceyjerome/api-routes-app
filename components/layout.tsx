import Head from 'next/head';
import useSWR from 'swr';
import NavBar from './navbar'
import Footer from './footer'
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
        <html>
            <Head>
                <title>KinderGarden</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </html>
    )
}