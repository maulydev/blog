"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import ThemeController from "tailwind-theme-controller";

const Navbar = () => {
  useEffect(() => {
    ThemeController.initialize();
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 p-3 border-b dark:border-b-gray-700 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold text-blue-500 flex items-center text-xl">
          <span>
            Mauly <span className="text-red-500 text-xl">.</span>dev
          </span>
        </Link>
        <ul className="flex items-center gap-6 dark:text-gray-100">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link
              href="https://github.com/maulydev"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-xl" />
            </Link>
          </li>
          <li>
            <button onClick={ThemeController.toggle} className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
              <MdWbSunny/>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
