import Pagination from "../Pagination";
import Main from "./Main";
import SearchForm from "../SearchForm";

const Home = () => {
  return (
    <div>
      <div className="lg:hidden px-2 mb-4">
        <SearchForm />
      </div>
      <Main />
      <Pagination />
    </div>
  );
};

export default Home;
