import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider";

const RecommendCard = ({ id }) => {
  const [recommends, setRecommends] = useState([]);
  const { loaded } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`https://product-pivot-server.vercel.app/recommendation/${id.id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setRecommends(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loaded]);

  //   console.log(id.id);

  return (
    <>
      {recommends.map((recommend, id) => {
        const {
          title,
          productName,
          imageURl,
          recommendation,
          queryTitle,
          creatorEmail,
          creatorName,
          userEmail,
          userName,
          date,
        } = recommend;
        return (
          <div
            key={id}
            className="flex flex-col font-Inter p-6 space-y-6 overflow-hidden rounded-lg cursor-pointer box-shadow  md:h-[600px]"
          >
            <div>
              <figure className="rounded-md overflow-hidden h-[200px] flex justify-center items-center bg-gray-400">
                <img className="w-full" src={imageURl} alt="" />
              </figure>
              <h2 className="mb-1 text-xl font-semibold py-2">{title}</h2>
              <div className="border-b border-gray-500 border-dotted pb-2 font-Inter ">
                <div className="flex justify-between pb-3">
                  <h1 className="font-semibold">{productName}</h1>
                  <p>{date} ago</p>
                </div>
                <h1 className="font-semibold">
                  queryTitle: <span className="text-red-500">{queryTitle}</span>
                </h1>
                <p className="text-paragraph-text pt-2">
                  {recommendation.slice(0, 45)}...
                </p>
              </div>
              <p className="text-center py-2 font-bold">Recommender</p>
              <div className="flex justify-between items-center border-b border-gray-500 border-dotted pb-2">
                <p>{userName}</p>
                <p>{userEmail}</p>
              </div>
              <p className="text-center py-2 font-bold">Creator Query</p>
              <div className="flex justify-between items-center">
                <p>{creatorName}</p>
                <p>{creatorEmail}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecommendCard;
