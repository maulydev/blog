import { getAllPosts } from "@/lib/fetcher";
import PostCard from "../PostCard";
const Main = async ({ searchParams }: { searchParams: any }) => {
  console.log(searchParams);
  const posts = await getAllPosts();
  
  return (
    <ul className="space-y-8">
      {posts.map((post: any) => (
        <li key={post.$id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Main;
