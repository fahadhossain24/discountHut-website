const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      
      <div className="lg:flex-1 flex justify-center items-center bg-zinc-200">
        <div className="p-5">
          <img src="./DiscountHut.png" alt="DiscountHut Logo" />
        </div>
      </div>

      <div className="lg:flex-1">
        <div className="container mx-auto p-8 lg:mt-24 lg:w-3/5">
          <h2 className="text-4xl font-bold pb-8">Sign Up</h2>

          <label htmlFor="name" className="block font-bold text-lg pb-2">
            Name<sup className="text-red-500 font-bold">*</sup>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            className="border-2 rounded-md px-3 py-2 mb-4 w-full"
          />

          <label htmlFor="mobile" className="block font-bold text-lg pb-2">
            Mobile Number<sup className="text-red-500 font-bold">*</sup>
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            placeholder="Enter Your Mobile Number"
            className="border-2 rounded-md px-3 py-2 mb-4 w-full"
          />

          <label htmlFor="email" className="block font-bold text-lg pb-2">
            Email<sup className="text-red-500 font-bold">*</sup>
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
            minLength="8"
            className="border-2 rounded-md px-3 py-2 mb-2 w-full"
          />
          <span className="text-red-500 pl-3">Must be at least 8 characters</span>

          <button
            onClick={() => {
              alert("Signed up successfully");
            }}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 w-full mt-3"
          >
            Create Account
          </button>
          <p className="mt-4 text-lg text-center">
            Already have an account?{" "}
            <a href="login" className="text-orange-500 text-lg">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
