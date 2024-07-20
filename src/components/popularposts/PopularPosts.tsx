import AsideCard from "../AsideCard";
import PostCard from "./PostCard";

const PopularPosts = () => {
  return (
    <AsideCard title="Popular Posts">
      <ul className="space-y-6">
        <li>
          <PostCard />
        </li>
        <li>
          <PostCard />
        </li>
        <li>
          <PostCard />
        </li>
      </ul>
    </AsideCard>
  );
};

export default PopularPosts;
