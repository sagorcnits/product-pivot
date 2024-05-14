const QuerieCard = ({ querie }) => {
  const {
    productName,
    producBrand,
    imageURL,
    title,
    boycotting,
    name,
    image,
    date,
  } = querie;

  return (
    <div className="flex  flex-col font-Inter p-6 space-y-6 overflow-hidden rounded-lg cursor-pointer box-shadow md:h-[550px]">
      <div className="md:h-[500px]">
        <figure className="rounded-md overflow-hidden h-[200px]">
          <img className="w-full h-full" src={imageURL} alt="" />
        </figure>
        <h2 className="mb-1 text-xl font-semibold py-2">{title}</h2>
        <div className="flex flex-col gap-2">
          <h1>
            <span className="font-bold">Product Name:</span><span className="text-red-500"> {productName}</span> 
          </h1>
          <h1>
            <span className="font-bold">Brand Name:</span> <span className="text-red-500"> {producBrand}</span> 
          </h1>
        </div>
        <p className="text-paragraph-text pt-2">{boycotting}</p>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex space-x-4">
          <img
            alt=""
            src={image}
            className="object-cover w-12 h-12 rounded-full shadow"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {name}
            </a>
            <span className="text-xs">{date} minute ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuerieCard;
