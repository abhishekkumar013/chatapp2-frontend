import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../componets/AuthLayout";
import { SocialLoginButtons } from "../componets/SocialLoginButton";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/signin",
        {
          mobileNumber: phoneNumber,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        navigate("/dashboard", { replace: true });
      } else {
        toast.info(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <AuthLayout title="Welcome back!" subtitle="Sign in to continue to ChatApp">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="h-4 w-4 text-gray-800 focus:ring-gray-800 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          {/* <div className="text-sm">
            <Link
              to="/reset-password"
              className="font-medium text-gray-800 hover:text-gray-900"
            >
              Reset password
            </Link>
          </div> */}
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            Sign in
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Dont have an account?
          <Link
            to="/signup"
            className="font-medium text-gray-800 hover:text-gray-900"
          >
            Sign up
          </Link>
        </p>
      </div>

      {/* <SocialLoginButtons /> */}
    </AuthLayout>
  );
};

export default Login;
