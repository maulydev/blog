/* eslint-disable @next/next/no-img-element */
import { Post } from "@/lib/definitions";
import { toRelative } from "@/lib/utils";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 md:gap-4 p-2 dark:border dark:border-gray-700 rounded-2xl">
      <div className="bg-gray-500 w-full lg:w-56 flex-shrink-0 rounded-xl overflow-hidden dark:border dark:border-gray-700">
        <img
          src="https://scontent.facc5-1.fna.fbcdn.net/v/t39.30808-6/380795248_122096839748055984_7391263640393971686_n.png?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGk9wLmpJAQ2X2APt_Umr_IqbUW3g_r11yptRbeD-vXXL9-9zDmCrnwpuCAyIi9psHdOwB9Fu32eHwp_6gudQ5C&_nc_ohc=Ny0K0RU2jukQ7kNvgF2xCGT&_nc_zt=23&_nc_ht=scontent.facc5-1.fna&oh=00_AYC1Vz3KN69mXSIcFyKU14n2ZOp9wacppBRZbE6v7SL7Yg&oe=66A169A9"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 space-y-2 lg:space-y-4 text-gray-900 dark:text-gray-100">
        <Link
          href={`/post/${post.$id}`}
          className="font-bold text-base lg:text-2xl hover:underline line-clamp-2"
        >
          {post.title}
        </Link>
        <div className="flex justify-between lg:max-w-[80%] text-xs lg:text-base">
          <span className="flex items-center gap-2">
            <FaUser className="xl:hidden" />
            <strong className="hidden xl:flex">Author:</strong> {post.author}
          </span>
          <span className="flex items-center gap-2">
            <SlCalender className="xl:hidden" />
            <strong className="hidden xl:flex">Posted:</strong>{" "}
            {toRelative(post.$createdAt)}
          </span>
        </div>
        <p className="line-clamp-2 dark:text-gray-400">{post.content}</p>
      </div>
    </div>
  );
};

export default PostCard;
