import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields before registering.");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    alert("Registered successfully!");
    navigate("/signin");
  };

  return (
    <div className="px-10 py-10 ">
      {/* header */}
      <h2 className="text-center font-semibold text-4xl text-gray-500 underline underline-offset-8">
        Register
      </h2>

      {/* wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-10">

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full md:w-[60%] lg:w-[30%]"
          autoComplete="off"
        >
          {/* name input */}
          <label className="text-base font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-3 text-[15px] border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* email input */}
          <label className="text-base font-medium">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 text-[15px] border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* password input */}
          <label className="text-base font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="p-3 text-[15px] border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* register button */}
          <button
            type="submit"
            className="bg-gray-400 text-white py-2 rounded-lg text-lg hover:bg-gray-500 transition"
          >
            Register
          </button>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-600 hover:underline">
              Sign in here
            </a>
          </p>
        </form>

      </div>
    </div>
  );
};

export default Register;
