import axios from "axios";
import date from 'date-and-time';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/AuthProvider";
const RecommendForm = ({ detail }) => {
  const { user,setLoaded, loaded } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const title = data.title;
    const itemName = data.productName;
    const imageURl = data.imageURl;
    const recommendation = data.recommendation;
    const now = new Date();
    const recommendInfo = {
      title,
      itemName,
      imageURl,
      recommendation,
      queryId: detail._id,
      queryTitle: detail.title,
      productName: detail.productName,
      creatorEmail: detail.email,
      creatorName: detail.name,
      userEmail: user.email,
      userName: user.displayName,
      date: date.format(now, 'MM DD YYYY HH:mm'),
    };

    axios
      .post("https://product-pivot-server.vercel.app/recommendation", recommendInfo)
      .then((res) => {
        const data = res.data;
        setLoaded(!loaded)
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: `Hello ${user.displayName} Sir Your Recommended Added. Thank You Sir`,
            icon: "success",
          });
          reset();
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Wrong",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };

  return (
    <div className="md:w-[470px] w-full p-2 md:p-6  border bg-white">
      <div className="mb-4 text-center">
        <h1 className="text-[25px] md:text-[30px]  font-Inter font-bold">
          Add Recommendation
        </h1>
      </div>
      <form className="space-y-8 font-Inter" onSubmit={handleSubmit(submit)}>
        <div className="space-y-4">
          <div>
            <input
              {...register("title", { required: true })}
              type="text"
              name="title"
              placeholder="Product title"
              className="w-full px-3 py-2 border rounded-md "
            />
          </div>
          <div>
            <input
              {...register("productName", { required: true })}
              type="text"
              name="productName"
              placeholder="Product Name"
              className="w-full px-3 py-2 border rounded-md "
            />
          </div>
          <div>
            <input
              {...register("imageURl", { required: true })}
              type="text"
              name="imageURl"
              placeholder="Product Image-URL"
              className="w-full px-3 py-2 border rounded-md "
            />
          </div>
          <div>
            <textarea
              {...register("recommendation", { required: true })}
              type="text"
              name="recommendation"
              placeholder="Recommendation reason"
              className="w-full h-[150px] md:h-[200px] overflow-auto px-3 py-2 border rounded-md resize-none"
            />
          </div>
        </div>
        <button className="w-full button font-Inter font-semibold">
          Add Recommendation
        </button>
      </form>
    </div>
  );
};

export default RecommendForm;
