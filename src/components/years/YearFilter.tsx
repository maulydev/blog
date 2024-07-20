import { FaAngleRight } from "react-icons/fa";
import AsideCard from "../AsideCard";
import Year from "./Year";

const YearFilter = () => {
  return (
    <AsideCard title="Filter by year">
      <ul className="space-y-4">
        <Year />
        <Year />
        <Year />
        <Year />
        <Year />
      </ul>
    </AsideCard>
  );
};

export default YearFilter;
