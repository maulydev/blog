import Link from "next/link";
import React from "react";

const TagCard = ({ tag }: { tag: { name: string } }) => {
  return (
    <li>
      <Link
        href={`/?tag=${tag.name}`}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-500 hover:text-white dark:hover:bg-gray-950 rounded"
      >
        {tag.name}
      </Link>
    </li>
  );
};

export default TagCard;
