import Head from "next/head";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import { CheckIcon } from "@heroicons/react/outline";

function Plans() {
  const { logOut } = useAuth();
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link
          rel="icon"
          href="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
        />
      </Head>

      <header className="flex justify-between items-center border-b border-white/10 bg-[#141414]">
        <Link href={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="logo"
            height={100}
            width={100}
            className="cursor-pointer object-contain m-5"
          />
        </Link>

        <button
          onClick={logOut}
          className="text-lg font-medium hover:underline m-5"
        >
          Sign Out
        </button>
      </header>

      <main className="pt-28 max-w-5xl px-5 pb-12 transition-all 
      md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" />
            Watch all you want. Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" />
            Recommendations just for you
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" />
            Change or cancel your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
            <div className="flex w-full items-center justify-center self-end md:w-3/5">
                {/* plan */}
                <div className="planBox">Standard</div>
                {/* plan */}
                <div className="planBox">Standard</div>
                {/* plan */}
                <div className="planBox">Standard</div>
            </div>

            {/* table */}

            <button>Subscribe</button>
        </div>
      </main>
    </div>
  );
}

export default Plans;
