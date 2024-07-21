import Pagination from "../Pagination";
import Main from "./Main";
import SearchForm from "../SearchForm";

const Home = ({ searchParams }: { searchParams: any }) => {
  return (
    <div>
      <div className="md:hidden px-2 mb-4">
        <SearchForm />
      </div>
      <Main searchParams={searchParams} />
      <Pagination />
    </div>
  );
};

export default Home;
