export default function FooterLayout() {

    return (
        <>
            <footer className="p-4 bg-gray-800 shadow lg:h-10 absolute inset-x-0 bottom-0  md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">Lincey™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">meow</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}