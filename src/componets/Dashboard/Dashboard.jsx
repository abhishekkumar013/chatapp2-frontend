import React, { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const ChatDashboard = () => {
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(null);

  const [queryParams, setQueryParams] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    // call search api
    if (queryParams.trim() === "") {
      setSearchData(contacts);
    } else {
      const filterData = contacts.filter(
        (c) =>
          c.name.toLowerCase().includes(queryParams.toLowerCase()) ||
          c.username.toLowerCase().includes(queryParams.toLowerCase())
      );
      setSearchData(filterData);
    }
  }, [queryParams]);

  const contacts = [
    { id: 1, name: "Kohli", username: "xxxxx1212x", avatar: "👨" },
    { id: 2, name: "Danish", username: "xxxxxxx518", avatar: "👨" },
    { id: 3, name: "Raju", username: "xxxxxxx321", avatar: "👨" },
    { id: 4, name: "shubham", username: "xxxxxxx348", avatar: "👨" },
    { id: 5, name: "Ayush", username: "xxxxxxx999", avatar: "👨" },
  ];

  const messages = [
    {
      id: 1,
      sender: "Danny",
      content: "Hi Kohli How Are you bro",
      isUser: true,
    },
    {
      id: 2,
      sender: "Kohli",
      content: "Hi bro i am fine , tm kaise ho",
      isUser: false,
    },
    { id: 3, sender: "Danny", content: "kaise ho", isUser: true },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Logic to send message would go here
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-pink-500 to-pink-400 p-4">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Left sidebar */}
        <div className="w-1/4 bg-gray-50 border-r border-gray-200 flex flex-col">
          <div className="p-4  flex justify-between items-center">
            <h1 className="text-xl font-bold">Chats</h1>
            <button className="p-2 rounded cursor-pointer">
              <LogoutIcon />
            </button>
          </div>

          {/* Search box */}
          <div className="p-2 flex">
            <input
              value={queryParams}
              onChange={(e) => setQueryParams(e.target.value)}
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-l-full px-4 py-2 focus:outline-none"
            />
            <button className="bg-gray-100 rounded-r-full px-3 py-2">
              <span className="text-gray-600">🔍</span>
            </button>
          </div>

          {/* Contact list */}
          <div className="overflow-y-auto flex-1">
            {queryParams.trim() !== "" && searchData.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No contacts found matching {queryParams}
              </div>
            ) : (
              (queryParams === "" ? contacts : searchData).map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
                    activeChat === contact.name ? "bg-gray-100" : ""
                  }`}
                  onClick={() => setActiveChat(contact.name)}
                >
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                    {contact.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{contact.name}</h3>
                    <p className="text-xs text-gray-500">{contact.username}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chat area */}
        {activeChat ? (
          <div className="flex-1 flex flex-col">
            {/* Chat header */}
            <div className="p-4 border-b border-gray-200 flex items-center bg-amber-50">
              {/* profile image for right header */}
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                👨
              </div>
              <h2 className="font-semibold">{activeChat}</h2>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                  👨
                </div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl">
                  Hi Danny
                </div>
              </div>

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-center mb-4 ${
                    msg.isUser ? "justify-end" : ""
                  }`}
                >
                  {!msg.isUser && (
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                      👨
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      msg.isUser
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-blue-600 text-white rounded-bl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.isUser && (
                    <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-white ml-2">
                      👨
                    </div>
                  )}
                </div>
              ))}

              <div className="flex justify-center my-4">
                <div className="text-blue-500">✓</div>
              </div>
            </div>

            {/* Message input with send button */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center bg-gray-100 rounded-full px-4">
                <input
                  type="text"
                  placeholder="Type your message"
                  className="flex-1 py-3 bg-transparent focus:outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className={`ml-2 rounded-full h-10 w-10 flex items-center justify-center ${
                    message.trim()
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
            <div className="text-6xl mb-4">💬</div>
            <h2 className="text-2xl font-semibold text-gray-500 mb-2">
              No chat selected
            </h2>
            <p className="text-gray-400">
              Select a conversation to start chatting
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatDashboard;
