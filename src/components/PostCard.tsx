/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="flex gap-4 p-2 dark:border dark:border-gray-700 rounded-2xl">
      <div className="bg-gray-500 w-56 flex-shrink-0 rounded-xl overflow-hidden dark:border dark:border-gray-700">
        <img
          src="https://scontent.facc5-1.fna.fbcdn.net/v/t39.30808-6/380795248_122096839748055984_7391263640393971686_n.png?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGk9wLmpJAQ2X2APt_Umr_IqbUW3g_r11yptRbeD-vXXL9-9zDmCrnwpuCAyIi9psHdOwB9Fu32eHwp_6gudQ5C&_nc_ohc=Ny0K0RU2jukQ7kNvgF2xCGT&_nc_zt=23&_nc_ht=scontent.facc5-1.fna&oh=00_AYC1Vz3KN69mXSIcFyKU14n2ZOp9wacppBRZbE6v7SL7Yg&oe=66A169A9"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 space-y-4 text-gray-900 dark:text-gray-100">
        <Link
          href="/post/blog-slug-title-here"
          className="font-bold text-2xl hover:underline line-clamp-2"
        >
          Fullstack application with Fastapi and Next JS
        </Link>
        <div className="flex justify-between max-w-[80%]">
          <span>
            <strong>Author</strong>: Abby Connelly
          </span>
          <span>
            <strong>Posted on</strong>: April 01, 2022
          </span>
        </div>
        <p className="line-clamp-2 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          facere, natus quae dicta iusto, delectus quidem, minus vero commodi
          corporis temporibus nihil velit adipisci dolorem veritatis
          perspiciatis iure error quis.
        </p>
      </div>
    </div>
  );
};

export default PostCard;
