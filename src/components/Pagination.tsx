import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="flex items-center gap-4 p-2 text-white text-xl mt-8 justify-center">
      <button className="bg-gray-950 p-3 hover:bg-gray-900 rounded">
        <MdSkipPrevious />
      </button>
      <button className="bg-gray-950 p-3 hover:bg-gray-900 rounded">
        <FaAngleLeft />
      </button>
      <span className="text-gray-900 dark:text-gray-100 text-sm md:text-base">Page 1 of 10</span>
      <button className="bg-gray-950 p-3 hover:bg-gray-900 rounded">
        <FaAngleRight />
      </button>
      <button className="bg-gray-950 p-3 hover:bg-gray-900 rounded">
        <MdSkipNext />
      </button>
    </div>
  );
};

export default Pagination;
