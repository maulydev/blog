import RelatedPost from "@/components/relatedposts/RelatedPost";

/* eslint-disable @next/next/no-img-element */
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div className="h-56 rounded-lg overflow-hidden relative">
        <img
          src="https://scontent.facc5-1.fna.fbcdn.net/v/t39.30808-6/380795248_122096839748055984_7391263640393971686_n.png?stp=dst-png_p640x640&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGk9wLmpJAQ2X2APt_Umr_IqbUW3g_r11yptRbeD-vXXL9-9zDmCrnwpuCAyIi9psHdOwB9Fu32eHwp_6gudQ5C&_nc_ohc=Ny0K0RU2jukQ7kNvgF2xCGT&_nc_zt=23&_nc_ht=scontent.facc5-1.fna&oh=00_AYDrYqpBRiJJjZmso-FZysxUtsJiLnoYcWzfnc6db83_tQ&oe=66A169A9"
          alt=""
        />
        <div className="absolute bottom-0 text-sm items-end flex justify-between p-3 z-40 text-white bg-gradient-to-t from-black inset-x-0 h-20">
          <span>
            <strong>Author</strong>: Abby Connelly
          </span>
          <span>
            <strong>Posted on</strong>: April 01, 2022
          </span>
        </div>
      </div>
      <div className="p-3 space-y-4 dark:text-gray-100">
        <h3 className="text-2xl font-bold">
          Fullstack application with Fastapi and Next JS
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quo
          tenetur laborum voluptates asperiores nesciunt laboriosam illum
          quaerat. Harum praesentium vel reiciendis animi tempora ut molestiae
          excepturi ex, porro, molestias dolor iste dolorum! Possimus nemo
          mollitia ex quod laborum fuga officia nesciunt, id eligendi corrupti
          quisquam dolor ea placeat rerum?
        </p>
      </div>

      <RelatedPost />
    </div>
  );
}
