import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";
import QueriesCard from "../../components/QueriesCard";
const imgUrl =
  "https://img.freepik.com/free-photo/online-marketing_53876-95308.jpg?t=st=1715333855~exp=1715337455~hmac=b07b2be266bee1378bab786eddbbe4e8fa7eef51c352252d5fde750f1db2320b&w=740";
const Queries = () => {
  const {localTheme} = useContext(AuthContext)
  const queriesData = useLoaderData();
  const [allQuery, setAllQuery] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const [layout, setLayout] = useState(3);

  const handleSearch = () => {
    const filterData = queriesData.filter((item) => {
      const itemName = item.productName.toLowerCase();
      if (inputValue === "") {
        return item;
      } else if (itemName.includes(inputValue)) {
        return item;
      }
    });
    setAllQuery(filterData);
  };
  // layout changes
  const layoutChanges = (data) => {
    setLayout(data);
  };

  useEffect(() => {
    const sortArr = queriesData.sort((a, b) => {
      const timeA = a.date.replaceAll(" ", "");
      const mainTimeA = timeA.replaceAll(":", "");
      const timeB = b.date.replaceAll(" ", "");
      const mainTimeB = timeB.replaceAll(":", "");
      return mainTimeB - mainTimeA;
    });
    setAllQuery(sortArr);
  }, []);
  // console.log(sortArr);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="rounded-md overflow-hidden  h-[250px]   bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#171718] text-center mt-10"
      >
        <h1 className="mt-14 text-white font-Inter text-[30px] md:text-[40px]">
          All Queries
        </h1>
        <div className={`md:w-[40%] w-[90%] mx-auto mt-10 flex justify-between items-center px-2 rounded-lg     ${localTheme=="light" ? "bg-white" : "bg-[#121212]"}`}>
          <input
            type="text"
            placeholder="Search Your Product"
            className="p-3 w-full focus:outline-none"
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          />
          <span onClick={handleSearch} className="cursor-pointer mr-3">
            <FaSearch></FaSearch>
          </span>
        </div>
      </div>

      <div className="mt-10 hidden lg:block">
        <h1 className="py-2 font-Inter font-bold text-[20px]">Select Layout</h1>
        <div className="flex gap-4">
          <button onClick={() => layoutChanges(2)} className="button">
            2
          </button>
          <button onClick={() => layoutChanges(3)} className="button">
            3
          </button>
          <button onClick={() => layoutChanges(4)} className="button ">
            4
          </button>
        </div>
      </div>

      <div
        className={`grid  md:grid-cols-2 lg:grid-cols-${layout} ${
          layout == 4 ? "gap-2" : "gap-10 "
        } ${layout == 4 ? "mt-10" : "mt-10"}`}
      >
        {allQuery?.map((querie, id) => (
          <QueriesCard querie={querie} key={id}></QueriesCard>
        ))}
      </div>
    </div>
  );
};

export default Queries;
