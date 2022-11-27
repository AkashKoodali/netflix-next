import Head from "next/head";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import { CheckIcon } from "@heroicons/react/outline";
import { Product } from "@stripe/firestore-stripe-payments";
import Table from "./Table";
import { useState } from "react";
import Loader from "./Loader";

interface Props {
  products: Product[];
}

function Plans({ products }: Props) {
  const { logOut } = useAuth();

  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2]);

  const [isBillingLoading, setIsBillingLoading] = useState(false);

  const subscribeToPlan = () => {}

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

      <main
        className="pt-28 mx-auto max-w-5xl px-5 pb-12 transition-all 
      md:px-10"
      >
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
            {products.map((product) => (
              <div
                key={product.id}
                className={`planBox ${
                  selectedPlan?.id === product.id ? "opacity-100" : "opacity-60"
                }`}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>

          {/* table */}
          <Table products={products} selectedPlan={selectedPlan} />

          <button
            disabled={!selectedPlan || isBillingLoading}
            onClick={ subscribeToPlan }
            className={`mx-auto w-11/12 rounded bg-[rgb(229,9,20)] py-4 text-xl shadow 
            hover:bg-[#f6121d] md:w-[420px] 
            ${isBillingLoading && "opacity-60"}`}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-gray-300" />
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Plans;
