import React from "react";
import PropTypes from "prop-types";

// Shared layout component for both login and signup
const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="flex min-h-screen w-full bg-white flex-col md:flex-row">
      {/* Left panel with diagonal stripes - responsive on all devices */}
      <div className="h-32 md:h-auto md:w-1/2 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, index) => (
            <div
              key={index}
              className={
                index % 2 !== 0 ? "absolute bg-white" : "absolute bg-black"
              }
              style={{
                height: "100px",
                width: "200%",
                top: `${index * 100 - 50}px`,
                left: "-50%",
                transform: "rotate(45deg)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Right panel with form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <div className="mr-2 text-3xl font-bold">ChatApp</div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

// Add prop validation
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

// Add default props
AuthLayout.defaultProps = {
  subtitle: "",
};

export default AuthLayout;
