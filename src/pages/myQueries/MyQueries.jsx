import { Link, useLoaderData } from "react-router-dom";
import MyQueryCard from "../../components/MyQueryCard";
import SectionIntro from "../../components/SectionIntro";

const imgUrl =
  "https://img.freepik.com/free-photo/online-marketing_53876-95308.jpg?t=st=1715333855~exp=1715337455~hmac=b07b2be266bee1378bab786eddbbe4e8fa7eef51c352252d5fde750f1db2320b&w=740";

const MyQueries = () => {
  const myQueriesData = useLoaderData();
  // console.log(myQueriesData)
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="rounded-md overflow-hidden  h-[250px]   bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#171718] text-center mt-10"
      >
        <h1 className="mt-14 text-white font-Inter text-[30px] md:text-[40px]">
          My Queries
        </h1>
        <Link to="/addquery">
          <button className="button mt-8">Add Ouery</button>
        </Link>
      </div>
      <section>
        <SectionIntro
          title={{
            heading: "My Query Section",
            paragraph:
              "Recent This Oueries Most Puploer And Really very expensive So you Can Try ",
          }}
        ></SectionIntro>
        {myQueriesData.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {myQueriesData?.map((querie, id) => (
              <MyQueryCard key={id} querie={querie}></MyQueryCard>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <figure className="w-[30%] mx-auto ">
              <img className="w-full"
                src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527139.jpg?t=st=1715558236~exp=1715561836~hmac=0c5c11e6b082de262ae40e6cffa389f27c683ec7c3539bbe48970612af104f58&w=740"
                alt=""
              />
            </figure>
            <Link to="/addquery">
              <button className="button">Add Ouery</button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default MyQueries;
