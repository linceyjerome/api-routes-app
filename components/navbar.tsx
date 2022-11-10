//TODO : CHANGE NAVBAR WITH VALID TABS

import Link from "next/link";
import { Info } from '../interfaces'
import HelpButton from "./help";
type InfoProps = {
  info: Info[]
}


export default function navBar({ info }: InfoProps) {
  return (

    <>
      <nav className="bg-purple-700">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">

            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>

                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                {/* <!--
                  Icon when menu is open.

                  Heroicon name: outline/x-mark

                  Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

              {/* House Icon */}
              <div className="flex flex-shrink-0 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                  <Link href="/">
                    <a className="hover:bg-purple-800 focus:bg-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
                  </Link>

                  <Link href="/info">
                    <a className="text-white hover:bg-purple-800 focus:bg-purple-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Info</a>
                  </Link>

                  <Link href="#" >
                    <a className="text-white hover:bg-purple-800 focus:bg-purple-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Liste des garderies/CPE</a>
                  </Link>

                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <HelpButton />
            </div>

          </div>

        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="/" className="bg-purple-700 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

            <a href="/info" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Info</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">b</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">c</a>
          </div>
        </div>
      </nav>
    </>
  )
}