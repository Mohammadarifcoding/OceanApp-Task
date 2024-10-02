import { useState, useEffect, useRef } from "react";
import { IoMdChatbubbles, IoMdClose, IoMdSend } from "react-icons/io";
import {
  AiOutlinePaperClip,
  AiOutlineAudio,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import "./Live.css";

const Live = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);
  const [hasReplied, setHasReplied] = useState(false);

  useEffect(() => {
    // Load messages from local storage
    const storedMessages =
      JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(storedMessages);
  }, []);

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isChatOpen) {
      const userName = "Rehan";
      const initialMessage = {
        id: 1,
        sender: "Thomas Shelby",
        text: `Hi ${userName}, how are you?`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar:
          "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Cillian-Murphy-Peaky-Blinders-1024x650.jpg",
      };

      setMessages([initialMessage]);
      localStorage.setItem("chatMessages", JSON.stringify([initialMessage]));
    }
  }, [isChatOpen]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const userMessage = {
        id: messages.length + 1,
        sender: "Rehan",
        text: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar:
          "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/454815017_1028360495588095_7111789134065894624_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHF5wqQG_Mchta0tbOcdbh649xTYDzGvgDj3FNgPMa-AH22kXjCednEkYPaKgj_PWDjXDJP4_P28h9AaD11yxog&_nc_ohc=R7h7vssDAtcQ7kNvgFCaKKi&_nc_ht=scontent.fdac5-1.fna&oh=00_AYBw8ec2mIfjcy7NN2pFSiGJxNVPUhC6PlLVAdct2lsmcw&oe=66D602FD",
      };

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, userMessage];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });

      setNewMessage("");

      // Set typing indicator and simulate a delay before replying
      setIsTyping(true);
      setTimeout(() => {
        if (!hasReplied) {
          const thankYouMessage = {
            id: messages.length + 2,
            sender: "Arif",
            text: "Thank you for your reply. Our team member will get back to you soon.",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            avatar:
              "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Cillian-Murphy-Peaky-Blinders-1024x650.jpg",
          };

          setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages, thankYouMessage];
            localStorage.setItem(
              "chatMessages",
              JSON.stringify(updatedMessages),
            );
            return updatedMessages;
          });

          setHasReplied(true);
          setIsTyping(false);
        }
      }, 1000);
    }
  };

  const handleEmojiClick = (emoji) => {
    setNewMessage((prevMessage) => prevMessage + emoji.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className={`flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 ease-in-out hover:bg-green-600 focus:outline-none ${isChatOpen ? "hidden" : "block"}`}
        aria-label="Open Live Chat"
      >
        <IoMdChatbubbles size={28} />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="h-[500px] w-full overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px]">
          {" "}
          {/* Adjust width based on screen size */}
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-gray-300 bg-green-500 p-4 dark:border-gray-700 dark:bg-gray-700">
            <div className="flex items-center space-x-4">
              <AiOutlineVideoCamera
                size={24}
                className="cursor-pointer text-white dark:text-gray-400"
              />
              <AiOutlineAudio
                size={24}
                className="cursor-pointer text-white dark:text-gray-400"
              />
            </div>
            <h2 className="text-lg font-semibold text-white">Live Chat</h2>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <IoMdClose size={24} />
            </button>
          </div>
          {/* Chat Messages */}
          <div
            ref={chatContainerRef}
            className="h-full flex-1 space-y-4 overflow-y-auto bg-gray-100 p-4 dark:bg-gray-900"
            style={{ maxHeight: "calc(100% - 120px)" }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "Rehan" ? "justify-end" : "justify-start"} items-end`}
              >
                {message.sender !== "Rehan" && (
                  <img
                    src={message.avatar}
                    alt={`${message.sender}'s avatar`}
                    className="mr-3 h-10 w-10 rounded-full"
                  />
                )}
                <div
                  className={`relative max-w-xs rounded-lg p-3 text-sm shadow-md ${
                    message.sender === "Rehan"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  <p>{message.text}</p>
                  <span className="mt-1 block text-xs text-white dark:text-white">
                    {message.time}
                  </span>
                  <div
                    className={`absolute h-0 w-0 border-b-8 border-r-8 border-t-8 border-transparent ${
                      message.sender === "Rehan"
                        ? "right-0 border-r-green-500"
                        : "left-0 border-r-gray-200 dark:border-r-gray-700"
                    }`}
                  />
                </div>
                {message.sender === "Rehan" && (
                  <img
                    src={message.avatar}
                    alt={`${message.sender}'s avatar`}
                    className="ml-3 h-10 w-10 rounded-full"
                  />
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-gray-500"></div>
                <div className="h-3 w-3 animate-pulse rounded-full bg-gray-500 delay-150"></div>
                <div className="h-3 w-3 animate-pulse rounded-full bg-gray-500 delay-300"></div>
              </div>
            )}
          </div>
          {/* Chat Input */}
          <div className="flex items-center border-t border-gray-300 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <button className="mr-3 text-gray-400 dark:text-gray-400">
              <AiOutlinePaperClip size={24} />
            </button>
            <button
              className="mr-3 text-gray-400 dark:text-gray-400"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <BsEmojiSmile size={24} />
            </button>
            {showEmojiPicker && (
              <div className="absolute bottom-16 left-0">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
            <input
              type="text"
              className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-black focus:border-green-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-green-600"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <button
              className="ml-3 text-green-500 dark:text-green-400"
              onClick={handleSendMessage}
            >
              <IoMdSend size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Live;
