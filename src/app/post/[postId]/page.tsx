/* eslint-disable @next/next/no-img-element */
import RelatedPost from "@/components/relatedposts/RelatedPost";
import { Post as PostProps } from "@/lib/definitions";
import { getAllPosts, getRelatedPosts, getSinglePost } from "@/lib/fetcher";
import { toRelative } from "@/lib/utils";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Markdown from "react-markdown";

export default async function Post({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const post: PostProps = await getSinglePost(postId);
  const relatedPosts = await getAllPosts();
  // const relatedPosts = await getRelatedPosts(post.category);

  return (
    <div className="">
      <div className="h-56 overflow-hidden relative dark:border-2 dark:border-gray-700 rounded-xl">
        <img
          src="https://scontent.facc5-1.fna.fbcdn.net/v/t39.30808-6/380795248_122096839748055984_7391263640393971686_n.png?stp=dst-png_p640x640&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGk9wLmpJAQ2X2APt_Umr_IqbUW3g_r11yptRbeD-vXXL9-9zDmCrnwpuCAyIi9psHdOwB9Fu32eHwp_6gudQ5C&_nc_ohc=Ny0K0RU2jukQ7kNvgF2xCGT&_nc_zt=23&_nc_ht=scontent.facc5-1.fna&oh=00_AYDrYqpBRiJJjZmso-FZysxUtsJiLnoYcWzfnc6db83_tQ&oe=66A169A9"
          alt=""
        />
        <div className="absolute bottom-0 text-sm items-end flex justify-between p-3 z-40 text-white bg-gradient-to-t from-black inset-x-0 h-20">
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
      </div>
      <div className="p-3 mt-4 dark:text-gray-100">
        <Markdown
          className={
            "prose prose-h1:text-2xl prose-pre:max-w-xs sm:prose-pre:max-w-full dark:prose-invert"
          }
        >
          {post.content}
        </Markdown>
      </div>

      <RelatedPost relatedPosts={relatedPosts} />
    </div>
  );
}
