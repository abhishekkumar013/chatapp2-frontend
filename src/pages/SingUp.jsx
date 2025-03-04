import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../componets/AuthLayout";
import { SocialLoginButtons } from "../componets/SocialLoginButton";
import ProfilePictureSelector from "../componets/ProfilePictureSelector";
export const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [showPictureSelector, setShowPictureSelector] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log("Signup attempt:", {
      name,
      phoneNumber,
      password,
      profilePicture,
    });
  };

  const handleProfilePictureSelect = (avatarUrl) => {
    setProfilePicture(avatarUrl);
    setShowPictureSelector(false);
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join ChatApp and connect with friends"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />
        </div>

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

        <div>
          <div className="flex flex-col items-center">
            {profilePicture ? (
              <div className="mb-2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                  <img
                    src={profilePicture}
                    alt="Selected profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => setShowPictureSelector(true)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              {profilePicture
                ? "Change Profile Picture"
                : "Select Profile Picture"}
            </button>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            Sign up
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-medium text-gray-800 hover:text-gray-900"
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* <SocialLoginButtons /> */}

      {showPictureSelector && (
        <ProfilePictureSelector
          onSelect={handleProfilePictureSelect}
          onClose={() => setShowPictureSelector(false)}
        />
      )}
    </AuthLayout>
  );
};
