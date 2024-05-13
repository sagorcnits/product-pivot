import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/AuthProvider";

const Update = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState({});
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios.get("http://localhost:5000/addquery").then((res) => {
      const data = res.data;
      const updateItem = data.find((item) => item._id === id);
      setUpdate(updateItem);
    });
  }, []);

  const handleSubmit = (data) => {
    data.preventDefault();
    const form = data.target;
    const productName = form.name.value;
    const producBrand = form.brand.value;
    const imageURL = form.imageURL.value;
    const title = form.title.value;
    const boycotting = form.boycotting.value;

    const updateData = {
      productName,
      producBrand,
      imageURL,
      title,
      boycotting,
    };
    // console.log(updateData);
    axios
      .put(`http://localhost:5000/addquery/${id}`, updateData)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: `Hello ${user.displayName} Sir Your Item has been Upadated`,
            icon: "success",
          });
        }else {
            Swal.fire({
                title: "Wrong",
                text: `Sorry ${user.displayName} Sir Your Item not Upadated`,
                icon: "error",
              });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="md:w-[520px] w-full p-6 rounded-md  border">
        <div className="mb-8 text-center">
          <h1 className="text-[30px]  font-Inter font-bold">
            Update Your Data
          </h1>
        </div>
        <form className="space-y-12 font-Inter" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex justify-between flex-col md:flex-row gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="w-full px-3 py-2 border rounded-md "
                  defaultValue={update.productName}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="brand"
                  placeholder="Product Brand"
                  className="w-full px-3 py-2 border rounded-md "
                  defaultValue={update.producBrand}
                />
              </div>
            </div>
            <div className="flex  justify-between flex-col md:flex-row gap-4">
              <div>
                <input
                  type="text"
                  name="imageURL"
                  placeholder="Product Image-URL"
                  className="w-full px-3 py-2 border rounded-md "
                  defaultValue={update.imageURL}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Query TItle"
                  className="w-full px-3 py-2 border rounded-md "
                  defaultValue={update.title}
                />
              </div>
            </div>
            <div>
              <textarea
                type="text"
                name="boycotting"
                placeholder="Boycotting Reason Details"
                className="w-full h-[200px] overflow-auto px-3 py-2 border rounded-md resize-none"
                defaultValue={update.boycotting}
              />
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <button className="w-full button font-Inter font-semibold">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
