/* eslint-disable @next/next/no-img-element */
import { Post } from "@/lib/definitions";
import { toRelative } from "@/lib/utils";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="flex gap-4 text-gray-950 dark:text-gray-100">
      <div className="bg-gray-700 w-24 flex-shrink-0 overflow-hidden dark:border-2 dark:border-gray-700 rounded-xl">
        <img
          src="https://scontent.facc5-1.fna.fbcdn.net/v/t39.30808-6/380795248_122096839748055984_7391263640393971686_n.png?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGk9wLmpJAQ2X2APt_Umr_IqbUW3g_r11yptRbeD-vXXL9-9zDmCrnwpuCAyIi9psHdOwB9Fu32eHwp_6gudQ5C&_nc_ohc=Ny0K0RU2jukQ7kNvgF2xCGT&_nc_zt=23&_nc_ht=scontent.facc5-1.fna&oh=00_AYC1Vz3KN69mXSIcFyKU14n2ZOp9wacppBRZbE6v7SL7Yg&oe=66A169A9"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <Link
          href={`/post/${post.$id}`}
          className="font-semibold line-clamp-2 hover:underline"
        >
          {post.title}
        </Link>
        <span className="flex justify-between text-sm">
          <span>{toRelative(post.$createdAt)}</span>
        </span>
      </div>
    </div>
  );
};

export default PostCard;
