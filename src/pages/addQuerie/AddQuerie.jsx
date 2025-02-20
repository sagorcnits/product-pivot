import axios from "axios";
import date from "date-and-time";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/AuthProvider";

const AddQuerie = () => {
  const { user, localTheme } = useContext(AuthContext);
  const handleSubmit = (data) => {
    data.preventDefault();
    const now = new Date();
    const form = data.target;
    const productName = form.name.value;
    const producBrand = form.brand.value;
    const imageURL = form.imageURL.value;
    const title = form.title.value;
    const boycotting = form.boycotting.value;
    const productInfo = {
      productName,
      producBrand,
      imageURL,
      title,
      boycotting,
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      date: date.format(now, "MM DD YYYY HH:mm"),
      recommendationCount: 0,
    };

    // data post server
    axios
      .post("https://product-pivot-server.vercel.app/addquery", productInfo)
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: `Hello ${user.displayName} Sir Your Query Added`,
            imageUrl: `${imageURL}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };

  // console.log(user);
  return (
    <div className="w-full flex justify-center ">
      <div className={`md:w-[520px] w-full p-6 rounded-md  border ${  localTheme == "light" ? "bg-white" : "bg-[#1D232A] border-[#838181]"}`}>
        <div className="mb-8 text-center">
          <h1 className="text-[30px]  font-Inter font-bold">Add Query</h1>
        </div>
        <form className="space-y-12 font-Inter" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className={`w-full px-3 py-2 border rounded-md ${
                    localTheme == "light" ? "bg-white" : "bg-[#1D232A] border-[#838181]"
                  }`}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="brand"
                  placeholder="Product Brand"
                  className={`w-full px-3 py-2 border rounded-md ${
                    localTheme == "light" ? "bg-white" : "bg-[#1D232A] border-[#838181]"
                  }`}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <input
                  type="text"
                  name="imageURL"
                  placeholder="Product Image-URL"
                  className={`w-full px-3 py-2 border rounded-md ${
                    localTheme == "light" ? "bg-white" : "bg-[#1D232A] border-[#838181]"
                  }`}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Query TItle"
                  className={`w-full px-3 py-2 border rounded-md ${
                    localTheme == "light" ? "bg-white" : "bg-[#1D232A] border-[#838181]"
                  }`}
                />
              </div>
            </div>
            <div>
              <textarea
                type="text"
                name="boycotting"
                placeholder="Boycotting Reason Details"
                className={`w-full h-[150px] md:h-[200px] overflow-auto px-3 py-2 border rounded-md resize-none ${
                  localTheme == "light" ? "bg-white" : "bg-[#1D232A] border-[#838181]"
                }`}
              />
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <button className="w-full button font-Inter font-semibold">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuerie;
