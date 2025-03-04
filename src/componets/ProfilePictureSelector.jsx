import React, { useState } from "react";
import PropTypes from "prop-types";

const ProfilePictureSelector = ({ onSelect, onClose }) => {
  // Sample avatar URLs - in a real app, these would be actual image paths
  //   const avatars = [
  //     "https://www.freepik.com/free-vector/young-man-with-glasses-illustration_356307012.htm#fromView=search&page=1&position=0&uuid=fc4d35d5-1a64-429a-9900-47b3628674da&query=avatar",
  //     "https://www.freepik.com/free-vector/smiling-young-man-illustration_354177468.htm#from_element=detail_alsolike",
  //     "https://www.freepik.com/free-vector/smiling-young-man-illustration_354177567.htm#from_element=detail_alsolike",
  //     "https://www.freepik.com/free-vector/young-man-black-shirt_338453299.htm#from_element=detail_alsolike",
  //     "https://www.freepik.com/free-vector/young-man-orange-hoodie_336636034.htm#from_element=detail_alsolike",
  //     "https://www.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_30473767.htm#fromView=search&page=1&position=35&uuid=959614f9-d5cf-4573-9758-cda6fe32be3e&query=cartoon",
  //     "https://www.freepik.com/free-vector/woman-with-long-dark-hair_393776046.htm#fromView=search&page=1&position=27&uuid=1ec445cd-2638-4c35-9cb1-ce9e597d1391&query=girl+avatar+face",
  //     "https://www.freepik.com/free-vector/redhaired-woman-with-braid_356306545.htm#fromView=search&page=1&position=49&uuid=1ec445cd-2638-4c35-9cb1-ce9e597d1391&query=girl+avatar+face",
  //     "https://www.freepik.com/free-vector/redhaired-fairy-with-stars_354177179.htm#from_element=detail_alsolike",
  //     "https://www.freepik.com/free-vector/starryeyed-fairy-portrait_354177156.htm#fromView=image_search_similar&page=1&position=3&uuid=8afb5d28-ceb7-427a-b931-05a1e1b0f7e9&query=girl+avatar+face",
  //   ];
  const avatars = [
    // // Boy Avatars
    // "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    // "https://cdn-icons-png.flaticon.com/512/2922/2922522.png",
    // "https://cdn-icons-png.flaticon.com/512/1154/1154448.png",
    // "https://cdn-icons-png.flaticon.com/512/2922/2922574.png",
    // "https://cdn-icons-png.flaticon.com/512/2922/2922565.png",

    // // Girl Avatars
    // "https://cdn-icons-png.flaticon.com/512/2922/2922519.png",
    // "https://cdn-icons-png.flaticon.com/512/2922/2922587.png",
    // "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    // "https://cdn-icons-png.flaticon.com/512/2922/2922593.png",
    // "https://cdn-icons-png.flaticon.com/512/2922/2922523.png",

    {
      link: "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133977.jpg?t=st=1736585771~exp=1736589371~hmac=3abf3b1681a67cc252c2131a6af0e53fc8cf9ab09590a55c2bd869f0927d9da7&w=826",
    },
    {
      link: "https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      link: "https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-15.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-13.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/premium-vector/photograph-cartoon-vector_970209-9543.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/free-vector/young-man-glasses-hoodie_1308-174658.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-173533.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/free-vector/redhaired-boy-vector-illustration_1308-176689.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/free-vector/happy-cartoon-character-smiling_1308-171029.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },

    {
      link: "https://img.freepik.com/free-vector/cheerful-young-girl-vector-portrait_1308-163430.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/free-vector/traditional-indian-woman-illustration_1308-174432.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033971.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/free-vector/girl-full_1450-149.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/free-vector/happy-woman-with-brown-hair_1308-171014.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
    {
      link: "https://img.freepik.com/free-vector/woman-portrait-wearing-cap-glasses_1308-146040.jpg?ga=GA1.1.1408379961.1714224392&semt=ais_hybrid",
    },
  ];

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Select Your Profile Image</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            Close X
          </button>
        </div>

        <div className="p-4 grid grid-cols-3 md:grid-cols-5 gap-4">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="cursor-pointer hover:opacity-75 transition-opacity"
              onClick={() => {
                onSelect(avatar.link);
                onClose();
              }}
            >
              <div className="rounded-full overflow-hidden border-2 border-transparent hover:border-gray-400">
                <img
                  src={avatar.link}
                  alt={`Avatar option ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
ProfilePictureSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProfilePictureSelector;
