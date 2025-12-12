import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // clear errors
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    // validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setEmailError("Enter a valid email!");
      isValid = false;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must be at least 5 characters and contain letters & numbers!"
      );
      isValid = false;
    }

    if (!isValid) return;

    // check registered user
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      alert("No registered user found. Please register first!");
      setEmail("");
      setPassword("");
      return;
    }

    // validate credentials
    if (email === registeredUser.email && password === registeredUser.password) {
      localStorage.setItem("userName", registeredUser.name);
      localStorage.setItem("userEmail", registeredUser.email);
      localStorage.setItem("userPassword", registeredUser.password);
      localStorage.setItem("isLoggedIn", "true");

      alert("Sign-in successfully!");
      navigate("/");
    } else {
      alert("Invalid credentials! Please check email or password.");
    }
  };

  return (
    <div className="px-10 py-10 min-h-[500px]">

      {/* header */}
      <h2 className="text-center font-semibold text-[35px] text-gray-500 underline underline-offset-8">
        Sign In
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-8">

        {/* signin form*/}
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-3 w-full sm:w-[60%] md:w-[40%] lg:w-[28%]"
        >
          {/* email */}
          <label className="text-[16px] font-medium">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="border border-gray-300 p-2.5 rounded-md text-[15px]
                       focus:border-gray-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="text-red-500 text-sm">{emailError}</span>}

          {/* password */}
          <label className="text-[16px] font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="border border-gray-300 p-2.5 rounded-md text-[15px]
                       focus:border-gray-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <span className="text-red-500 text-sm">{passwordError}</span>
          )}

          {/* submit button */}
          <button
            type="submit"
            className="bg-gray-400 text-white py-2 rounded-md text-[18px] 
                       hover:bg-gray-500 transition"
          >
            Submit
          </button>

          <p className="text-center mt-2">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
