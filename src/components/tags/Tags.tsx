import AsideCard from "../AsideCard";
import TagCard from "./TagCard";

const Tags = () => {
  return (
    <AsideCard title="Tags">
      <ul className="flex flex-wrap gap-2">
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
      </ul>
    </AsideCard>
  );
};

export default Tags;
