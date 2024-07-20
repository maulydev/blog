import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Year = () => {
  return (
    <li>
      <Link href="" className="flex items-center justify-between text-gray-900 dark:text-gray-100">
        <span className="flex items-center gap-2 hover:underline hover:text-gray-950 dark:hover:text-gray-200">
          <FaAngleRight /> 2024
        </span>
        <span className="p-2 bg-gray-200 dark:text-white text-sm dark:bg-gray-700 rounded">
          34
        </span>
      </Link>
    </li>
  );
};

export default Year;
