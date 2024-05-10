
const imgUrl =
  "https://img.freepik.com/free-photo/online-marketing_53876-95308.jpg?t=st=1715333855~exp=1715337455~hmac=b07b2be266bee1378bab786eddbbe4e8fa7eef51c352252d5fde750f1db2320b&w=740";

const QuerieCard = () => {
  return (
    <div className="flex flex-col font-Inter p-6 space-y-6 overflow-hidden rounded-lg cursor-pointer box-shadow duration-500 hover:-translate-y-6 hover:border border-bgColor">
      <div>
       <figure className="rounded-md overflow-hidden">
         <img src={imgUrl} alt="" />
       </figure>
        <h2 className="mb-1 text-xl font-semibold py-2">
        Is there any Better product that gives me the same quality?
        </h2>
        <div className="flex justify-between ">
          <h1><span className="font-bold">Product Name:</span> Watch</h1>
          <h1><span className="font-bold">Brand Name:</span> Samsung</h1>
        </div>
        <p className="text-paragraph-text pt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
      <div className="flex space-x-4">
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
  );
};

export default QuerieCard;
