import axios from "axios";
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../components/AuthProvider";
import { auth } from "../../firebase";
const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, setLoaded, loaded } = useContext(AuthContext);

  const submit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        setLoaded(!loaded);
        const user = result.user;
        updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: data.photo_url,
        });
      //  server hitting jwt
      axios
      .post("https://product-pivot-server.vercel.app/jwt", user, { withCredentials: true })
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
        navigate("/")
        reset();
        toast.success("Complate Your Register Wow");
      })
      .catch((error) => {
        toast.warn("Alredy Use This Email");
        console.log(error.message)
      });
  };

  return (
    <div className="w-full flex justify-center ">
      <ToastContainer></ToastContainer>
      <div className="md:w-[450px] w-full p-6 rounded-md sm:p-10 border">
        <div className="mb-8 text-center">
          <h1 className="text-[30px]  font-Inter font-bold">
            Register an Acount
          </h1>
        </div>
        <form className="space-y-12 font-Inter" onSubmit={handleSubmit(submit)}>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Name</label>
              </div>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {errors.name && (
                <p className="text-red-600 font-Inter">Your Input Invalid</p>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Email</label>
              </div>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {errors.email && (
                <p className="text-red-600 font-Inter">Your Email Invalid</p>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">URL</label>
              </div>
              <input
                {...register("photo_url", { required: true })}
                type="text"
                name="photo_url"
                placeholder="photo url"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {errors.photo_url && (
                <p className="text-red-600 font-Inter">Your Input Invalid</p>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
              </div>
              <input
                {...register("password", {
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])/,
                  },
                  minLength: 6,
                })}
                type="password"
                name="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md "
              />
              {errors.password && (
                <p className="text-red-600 font-Inter">Your Password Invalid</p>
              )}
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <button className="w-full button font-Inter font-semibold">
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              You have Already Acount?
              <Link
                to="/login"
                href="#"
                className="hover:underline dark:text-violet-600"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
