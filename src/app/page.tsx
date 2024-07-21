import Home from "@/components/home/Home";

const HomePage = ({ searchParams }: { searchParams: any }) => {
  
  return (
    <div>
      <Home searchParams={searchParams} />
    </div>
  );
};

export default HomePage;
