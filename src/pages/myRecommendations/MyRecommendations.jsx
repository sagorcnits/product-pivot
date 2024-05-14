import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/AuthProvider";
import SectionIntro from "../../components/SectionIntro";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [myCommendsData, setMyCommendsData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get("https://product-pivot-server.vercel.app/recommendation", {withCredentials:true})
      .then((res) => {
        const data = res.data;
        const myCommendsData = data.filter(
          (item) => item.userEmail === user.email
        );
        setMyCommendsData(myCommendsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reload]);

  const handleDelete = (id) => {
    // console.log("delete",id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://product-pivot-server.vercel.app/recommendation/${id}`)
          .then((res) => {
            const data = res.data;
            if (data.deletedCount > 0) {
              setReload(!reload);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  // console.log(myCommendsData)
  return (
    <div>
      <SectionIntro
        title={{
          heading: "Your All Recommendations",
          paragraph:
            "Your Recommendations here if you want to delete just delete button clik",
        }}
      ></SectionIntro>

      {myCommendsData.length > 0 ? (
        <>
          <section className="mt-16">
            <div className="overflow-auto">
              <table className="table ">
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
                      <tr key={id} className="*:text-[17px] font-Inter ">
                        <td>{id + 1}</td>
                        <td>{commended.productName}</td>
                        <td>{commended.title}</td>
                        <td>{commended.creatorEmail}</td>
                        <td>{commended.creatorName}</td>
                        <td>
                          <button
                            onClick={() => handleDelete(commended.queryId)}
                            className="button"
                          >
                            delete
                          </button>
                        </td>
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
  );
};

export default MyRecommendations;
