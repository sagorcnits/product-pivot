import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";
import SectionIntro from "../../components/SectionIntro";
import RecommendCard from "./RecommendCard";
import RecommendForm from "./RecommendForm";

const imgUrl =
  "https://img.freepik.com/free-photo/online-marketing_53876-95308.jpg?t=st=1715333855~exp=1715337455~hmac=b07b2be266bee1378bab786eddbbe4e8fa7eef51c352252d5fde750f1db2320b&w=740";
const QueryDetails = () => {
  const [detail, setDetails] = useState(null);

const {loaded} = useContext(AuthContext)
  const id = useParams();
  useEffect(() => {
    axios
      .get("https://product-pivot-server.vercel.app/addquery")
      .then((res) => {
        const data = res.data;
        const detailData = data.find((detail) => detail._id === id.id);
        setDetails(detailData);
      })
      .catch((error) => console.log(error));
  }, [loaded]);



  return (
    <>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="rounded-md overflow-hidden  h-[150px]   bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#171718] text-center mt-10"
      >
        <h1 className="mt-10 text-white font-Inter text-[30px] md:text-[40px]">
          Details Queries
        </h1>
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-center gap-10 ">
        <figure className="rounded-md overflow-hidden flex-1 md:h-[500px]">
          <img
            className="w-full h-full cursor-pointer duration-500 scale-1 hover:scale-[1.1]"
            src={detail?.imageURL}
            alt=""
          />
        </figure>
        <div className="font-Inter flex-1">
          <div className="border-b border-dotted">
            <h2 className="mb-1 text-xl font-semibold pb-2 pt-0 text-balance">
              {detail?.title}
            </h2>
            <h1 className="py-3 text-[18px] ">
              <span className="font-bold">Product Name:</span>{" "}
              {detail?.productName}
            </h1>
            <h1 className="py-3 text-[18px] ">
              <span className="font-bold">Brand Name:</span>{" "}
              {detail?.producBrand}
            </h1>
          </div>
          <div className="border-b border-dotted">
            <h1 className="py-3 text-[18px] text-balance">
              <span className="font-bold">Alternation Reason:</span>{" "}
              {detail?.boycotting}
            </h1>
            <h1 className="py-3 text-[18px] ">
              <span className="font-bold">Posted:</span> {detail?.date} ago
            </h1>
            <h1 className="py-3 text-[18px] ">
              <span className="font-bold">RecommendationCount:</span>{" "}
              {detail?.recommendationCount}
            </h1>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex space-x-4 mt-4">
              <img
                alt=""
                src={detail?.image}
                className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold"
                >
                  {detail?.name}
                </a>
                <span className="text-xs dark:text-gray-600">
                  {detail?.date} ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <SectionIntro
          title={{
            heading: "Add A Recommendation",
            paragraph:
              "Recent This Oueries Most Puploer And Really very expensive So you Can Try ",
          }}
        ></SectionIntro>
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className="rounded-md overflow-hidden     bg-center bg-cover bg-no-repeat   text-center mt-10"
        >
          <RecommendForm detail={detail} ></RecommendForm>
        </div>
      </section>
      <section>
      <SectionIntro
          title={{
            heading: "All Recommendations",
            paragraph:
              "Recent This Oueries Most Puploer And Really very expensive So you Can Try ",
          }}
        ></SectionIntro>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <RecommendCard id={id} ></RecommendCard>
        </div>
      </section>
    </>
  );
};

export default QueryDetails;
