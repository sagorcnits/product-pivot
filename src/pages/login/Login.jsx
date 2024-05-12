import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="md:w-[450px] w-full p-6 rounded-md sm:p-10 border">
        <div className="mb-8 text-center">
          <div className="size-24 rounded-full border mx-auto cursor-pointer overflow-hidden">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt=""
            />
          </div>
          <h1 className="text-[25px] font-Inter font-bold">ProductPivot</h1>
        </div>
        <form className="space-y-12 font-Inter">
          <div className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
                <a href="#" className="text-xs hover:underline text-bgColor">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <button className="w-full button font-Inter font-semibold">
                Sign in
              </button>
            </div>
            <div className="divider">OR</div>
            <button className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md hover:bg-gray-200">
              <FcGoogle></FcGoogle>
              <p>Login with Google</p>
            </button>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account?
              <Link to="/register" href="#" className="hover:underline dark:text-violet-600">
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
