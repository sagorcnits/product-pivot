import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";
import SectionIntro from "../../components/SectionIntro";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const reCommendsData = useLoaderData();

  const myCommendsData = reCommendsData.filter(
    (item) => item.userEmail === user.email
  );

  // console.log(myCommendsData)
  return (
    <div>
      <SectionIntro
        title={{
          heading: "Your All Recommendations",
          paragraph:
            "Recent This Oueries Most Puploer And Really very expensive So you Can Try ",
        }}
      ></SectionIntro>

      <section className="mt-16">
        <table className="table">
          <thead>
            <tr className=" *:text-[19px] font-Inter">
              <th></th>
              <th>Product Name</th>
              <th>title</th>
              <th>creatorEmail</th>
              <th>creatorName</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myCommendsData?.map((commended, id) => {
              return (
                <tr key={id} className="*:text-[17px]">
                  <td>{id + 1}</td>
                  <td>{commended.productName}</td>
                  <td>{commended.title}</td>
                  <td>{commended.creatorEmail}</td>
                  <td>{commended.creatorName}</td>
                  <td>delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MyRecommendations;
