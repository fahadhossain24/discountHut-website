const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:flex-1 flex justify-center items-center bg-zinc-200">
        <div className="p-5">
          <img
            src="./DiscountHut.png"
            className="loginlogo"
            alt="DiscountHut Logo"
          />
        </div>
      </div>

      <div className="lg:flex-1">
        <div className="container mx-auto p-8 lg:mt-24 lg:w-3/5">
          <h2 className="text-4xl font-bold pb-2">Log In</h2>
          <p className="mb-4 text-lg">
            Welcome back! Please enter your details!
          </p>

          <label htmlFor="email" className="block font-bold text-lg pb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="border-2 rounded-md px-3 py-2 mb-4 w-full"
          />

          <label htmlFor="password" className="block font-bold text-lg pb-2">
            Password<sup className="text-red-500 font-bold">*</sup>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            className="border-2 rounded-md px-3 py-2 mb-4 w-full"
          />

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="mr-2 text-lg"
              />
              <label htmlFor="remember-me" className="text-lg">
                Remember me
              </label>
            </div>
            <div>
              <a href="" className="font-bold text-lg text-orange-500">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            onClick={() => {
              alert("Logged in successfully");
            }}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
          >
            Sign In
          </button>
          <p className="mt-4 text-lg text-center">
            Don&apos;t have an account?{" "}
            <a href="signup" className="text-orange-500 text-lg">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
