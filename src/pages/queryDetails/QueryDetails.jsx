import SectionIntro from "../../components/SectionIntro";
import RecommendForm from "../recommendtionForMe/RecommendForm";

const imgUrl =
  "https://img.freepik.com/free-photo/online-marketing_53876-95308.jpg?t=st=1715333855~exp=1715337455~hmac=b07b2be266bee1378bab786eddbbe4e8fa7eef51c352252d5fde750f1db2320b&w=740";
const QueryDetails = () => {
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
      <div className="mt-10 flex flex-col md:flex-row gap-10">
        <figure className="rounded-md overflow-hidden flex-1">
          <img className="w-full h-full" src={imgUrl} alt="" />
        </figure>
        <div className="font-Inter flex-1">
          <div className="border-b border-dotted">
            <h2 className="mb-1 text-xl font-semibold py-2 text-balance">
              Is there any Better product that gives me the same quality?
            </h2>
            <h1 className="py-3 text-[18px] ">
              <span className="font-bold">Product Name:</span> Watch
            </h1>
            <h1 className="py-3 text-[18px] ">
              <span className="font-bold">Brand Name:</span> Samsung
            </h1>
          </div>
          <div className="border-b border-dotted">
            <h1 className="py-3 text-[18px] text-balance">
              <span className="font-bold">Alternation Reason:</span> Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              exercitationem repellendus veritatis aliquam odio rem debitis a
              iure
            </h1>
            <h1 className="py-3 text-[18px] ">
              <span className="font-bold">Posted:</span> 1hr ago
            </h1>
            <h1 className="py-3 text-[18px] ">
              <span className="font-bold">RecommendationCount:</span> 44
            </h1>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex space-x-4 mt-4">
              <img
                alt=""
                src="https://source.unsplash.com/100x100/?portrait"
                className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold"
                >
                  Leroy Jenkins
                </a>
                <span className="text-xs dark:text-gray-600">4 hours ago</span>
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
          <RecommendForm></RecommendForm>
        </div>
      </section>
    </>
  );
};

export default QueryDetails;
