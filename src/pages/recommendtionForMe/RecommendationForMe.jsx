import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider";
import SectionIntro from "../../components/SectionIntro";

const RecommendationForMe = () => {
  const [recommendForMe, setRecommendForMe] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recommendation")
      .then((res) => {
        const data = res.data;
        const filterForMe = data.filter(
          (item) => item.creatorEmail === user.email
        );
        setRecommendForMe(filterForMe);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <SectionIntro
        title={{
          heading: "Recommendation For Me",
          paragraph:
            "Recent This Oueries Most Puploer And Really very expensive So you Can Try ",
        }}
      ></SectionIntro>

      <section>
        <div className="overflow-hidden">
          {recommendForMe.length > 0 ? (
            <>
              <section className="mt-16">
                <div className="overflow-auto">
                  <table className="table ">
                    <thead>
                      <tr className=" *:text-[19px] font-Inter">
                        <th></th>
                        <th>Product Name</th>
                        <th>Title</th>
                        <th>CreatorEmail</th>
                        <th>CreatorName</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recommendForMe?.map((recommend, id) => {
                        return (
                          <tr key={id} className="*:text-[17px] font-Inter ">
                            <td>{id + 1}</td>
                            <td>{recommend.productName}</td>
                            <td>{recommend.title}</td>
                            <td>{recommend.creatorEmail}</td>
                            <td>{recommend.creatorName}</td>
                            <td>{recommend.date}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          ) : (
            <>
              <div className="text-center">
                <figure className="w-[30%] mx-auto ">
                  <img
                    className="w-full"
                    src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527139.jpg?t=st=1715558236~exp=1715561836~hmac=0c5c11e6b082de262ae40e6cffa389f27c683ec7c3539bbe48970612af104f58&w=740"
                    alt=""
                  />
                </figure>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default RecommendationForMe;
