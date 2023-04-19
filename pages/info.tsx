import Link from "next/link";
export default function navBar() {
    return (

        <>
            <h1>Information sur le site</h1>

            <p>App qui liste la disponibilité  des garderies</p>

            <Link href="/">
                <a className="hover:underline">retour à home</a>
            </Link>
        </>
    )
}