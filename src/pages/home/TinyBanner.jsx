const imgUrl =
  "https://img.freepik.com/free-photo/online-marketing_53876-95308.jpg?t=st=1715333855~exp=1715337455~hmac=b07b2be266bee1378bab786eddbbe4e8fa7eef51c352252d5fde750f1db2320b&w=740";

const TinyBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className="rounded-md overflow-hidden  h-[200px]   bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#171718] text-center mt-10"
    >
      <h1 className="mt-10 text-white font-Inter text-[40px]">All Queries</h1>
      <button className="button mt-6">More Queries</button>
    </div>
  );
};

export default TinyBanner;
