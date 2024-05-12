import { Link } from "react-router-dom";
import QueriesCard from "../../components/QueriesCard";

const imgUrl =
  "https://img.freepik.com/free-photo/online-marketing_53876-95308.jpg?t=st=1715333855~exp=1715337455~hmac=b07b2be266bee1378bab786eddbbe4e8fa7eef51c352252d5fde750f1db2320b&w=740";
const Queries = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="rounded-md overflow-hidden  h-[250px]   bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#171718] text-center mt-10"
      >
        <h1 className="mt-14 text-white font-Inter text-[30px] md:text-[40px]">
          All Queries
        </h1>
        <Link to='/myqueries'><button className="button mt-8">My Queries</button></Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <QueriesCard></QueriesCard>
        <QueriesCard></QueriesCard>
        <QueriesCard></QueriesCard>
        <QueriesCard></QueriesCard>
        <QueriesCard></QueriesCard>
        <QueriesCard></QueriesCard>
      </div>
    </div>
  );
};

export default Queries;
