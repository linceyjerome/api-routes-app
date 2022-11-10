


export default function Home() {
    return (
        <>


            <div className="container w-full md:max-w-3xl mx-auto pt-20">

                <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

                    {/* <!--Title--> */}
                    <div className="font-sans">

                        <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Welcome to thiis page</h1>
                        <p className="text-sm md:text-base font-normal text-gray-600">Published one day</p>
                    </div>


                    {/* <!--Post Content--> */}


                    {/* <!--Lead Para--> */}
                    <p className="py-6">
                        👋 Welcome to this page... need more content
                    </p>

                    <p className="py-6">gonna have some content here...</p>


                    <p className="text-base md:text-sm text-green-500 font-bold">&lt;<a href="/List" className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Voir la liste</a>
                    </p>
                </div>
            </div>
        </>
    )
}