import React from "react";
import { IoSearch } from "react-icons/io5";
import AsideCard from "../AsideCard";
import PopularPosts from "../popularposts/PopularPosts";
import Tags from "../tags/Tags";
import YearFilter from "../years/YearFilter";
import { MdEmail } from "react-icons/md";

const Aside = () => {
  return (
    <aside className="space-y-6 sticky top-0">
      <form className="flex">
        <input
          type="text"
          placeholder="Search for posts..."
          className="border dark:border-gray-700 dark:text-white px-4 py-2 flex-1 dark:bg-gray-700 outline-none rounded-l"
        />
        <button className="bg-gray-900 dark:bg-gray-950 text-white px-4 py-2 rounded-r hover:bg-gray-900">
          <IoSearch />
        </button>
      </form>

      <AsideCard title="Newsletter">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm dark:text-gray-100">
              Email address
            </label>
            <input
              id="email"
              type="text"
              placeholder="Please enter your email"
              className="border dark:border-gray-700 dark:bg-gray-700 p-2 outline-none dark:text-white rounded"
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-4 bg-gray-950 hover:bg-gray-900 text-white px-4 py-2 rounded active:scale-95"
          >
            <MdEmail /> <span>Subscribe Now</span>
          </button>
        </form>
      </AsideCard>

      <PopularPosts />

      <Tags />

      <YearFilter />
    </aside>
  );
};

export default Aside;
