const DigitalCard = ({info}) => {
  return (
    <div className="box-shadow rounded-md p-4 cursor-pointer">
      <img
        className="w-[40%] block mx-auto"
        src={info.img}
        alt=""
      />
      <h1 className="text-center font-Inter font-bold pt-2">{info.title}</h1>
    </div>
  );
};

export default DigitalCard;
