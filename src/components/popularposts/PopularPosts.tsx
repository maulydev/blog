import { getPopularPosts } from "@/lib/fetcher";
import AsideCard from "../AsideCard";
import PostCard from "./PostCard";

const PopularPosts = async () => {
  const posts = await getPopularPosts();
  return (
    <AsideCard title="Popular Posts">
      <ul className="space-y-6">
        {posts.map((post: any) => (
          <li key={post.$id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </AsideCard>
  );
};

export default PopularPosts;
