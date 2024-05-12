import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="md:w-[450px] w-full p-6 rounded-md sm:p-10 border">
        <div className="mb-8 text-center">
          <h1 className="text-[30px]  font-Inter font-bold">
            Register an Acount
          </h1>
        </div>
        <form className="space-y-12 font-Inter">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Name</label>
              </div>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Email</label>
              </div>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">URL</label>
              </div>
              <input
                type="text"
                name="photo_url"
                placeholder="photo url"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
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
