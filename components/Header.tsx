import second from "react-icons";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logOut } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if(window.screenY > 0) {
        setIsScrolled(true);
      }else { 
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <header className={`${isScrolled && 'bg-black'}`}>
      {/* bg-[#141414] */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt="logo"
          height={100}
          width={100}
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Show</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link href={"/account"}> */}
          <img
          onClick={logOut}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="icon"
            className="cursor-pointer rounded w-6 h-6"
          />
        {/* </Link> */}
      </div>
    </header>
  );
};

export default Header;
