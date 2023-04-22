import { Info } from '../interfaces';
import Link from 'next/link';

type InfoProps = {
  info: Info[];
};
export default function Home({ info }: InfoProps) {
  return (
    <>
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          {/* <!--Title--> */}
          <div className="font-sans">
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              Welcome to this page
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600">
              develop by me.
            </p>
          </div>

          {/* <!--Post Content--> */}

          {/* <!--Lead Para--> */}
          <p className="py-6">
            👋 Welcome to this page... it give you the list of the kindergarden
            and CPE !
          </p>

          <p className="py-6">gonna have some content here...</p>

          <p className="text-base md:text-sm text-green-500 font-bold">
            &lt;
            <Link href="/InfoList">voir liste garderie/CPE</Link>
          </p>
        </div>
      </div>
    </>
  );
}
