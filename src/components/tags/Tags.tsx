import { getAllTags } from "@/lib/fetcher";
import AsideCard from "../AsideCard";
import TagCard from "./TagCard";

const Tags = async () => {
  const tags = await getAllTags();
  return (
    <AsideCard title="Tags">
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag: any) => (
          <TagCard key={tag.$id} tag={tag} />
        ))}
      </ul>
    </AsideCard>
  );
};

export default Tags;
