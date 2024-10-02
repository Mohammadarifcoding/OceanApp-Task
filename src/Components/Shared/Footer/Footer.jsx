import { useState, useEffect } from "react";
import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import lightLogo from "../../../assets/logo/newLogo.png"; // Light mode logo
import darkLogo from "../../../assets/logo/newLogo2.png"; // Dark mode logo

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to handle dark mode

  // Function to handle dark mode state change
  const handleDarkModeChange = () => {
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkModeEnabled);
    console.log("Dark mode state changed:", darkModeEnabled);
  };

  useEffect(() => {
    // Check if dark mode is enabled by checking the root element's class
    handleDarkModeChange();

    // Add event listener for dark mode change
    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="dark:darkBackground border-t border-gray-200 bg-tertiary px-5 pb-8 pt-20 dark:border-white dark:bg-darkBackground">
      <Container className="max-w-[1300px]">
        <div className="grid grid-cols-1 items-start justify-start space-y-10 text-lightText dark:text-white md:grid-cols-2 md:justify-center lg:grid-cols-4 lg:items-start lg:gap-10 lg:space-y-0">
          {/* 1st grid */}
          <div className="space-y-3">
            <Link to="/">
              <img
                src={isDarkMode ? darkLogo : lightLogo} // Conditionally render the logo based on dark mode state
                className="max-w-[200px]"
                alt="Logo"
              />
            </Link>
            <h1 className="max-w-xl text-xs">
              ওসমানিয়া স্কিলস মাস্টারআপনাকে বিভিন্ন নতুন দক্ষতা শিখতে এবং
              বৃদ্ধি পেতে সহায়তা করবে। এগুলি আপনাকে আপনার ক্যারিয়ারকে উন্নত
              করতে সাহায্য করবে।
            </h1>
          </div>
          {/* 2nd grid */}
          <div>
            <h1 className="font-semibold lg:mb-8">সাহায্য নিন</h1>
            <div className="space-y-4 text-sm">
              <p>যোগাযোগ করুন</p>
              <p>ব্লগ</p>
              <p>প্রশ্নোত্তর(FAQ)</p>
              <p>গোপনীয়তা এবং নিরাপত্তা</p>
            </div>
          </div>
          {/* 3rd grid */}
          <div>
            <h1 className="font-semibold uppercase lg:mb-8">কোর্সসমূহ</h1>
            <ul className="space-y-4 text-sm">
              <li>অ্যাফিলিয়েট মার্কেটিং</li>
              <li>ডিজিটাল মার্কেটিং</li>
              <li>প্রোগ্রামিং</li>
              <li>ওয়েব ডেভেলপমেন্ট</li>
            </ul>
          </div>
          {/* 4th grid */}
          <div className="space-y-2">
            <h1 className="font-semibold lg:mb-8">আমাদের যোগাযোগ মাধ্যম</h1>
            <div className="space-y-2 text-sm">
              <h5 className="max-w-xl">
                <span className="mr-1 font-semibold"> ঠিকানা: </span>৫৭/১,
                কাফরুল, ঢাকা-১২১৬, বাংলাদেশ
              </h5>
              <div>
                <p>
                  <span className="mr-1 font-semibold">কল করুন:</span> + 880
                  1860496257
                </p>
                <p>
                  <span className="mr-1 font-semibold">ইমেইল: </span>{" "}
                  nabirasek@gmail.com
                </p>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center justify-start gap-3 text-xl text-gray-600">
              <FaFacebookF />
              <FaPinterestP className="text-[#FF782D]" />
              <FaXTwitter />
              <RiInstagramFill className="text-2xl" />
              <FaYoutube className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="my-10 border-t border-[#5BE584]"></div>
        <div>
          <p className="text-center text-xs text-gray-500 md:text-sm">
            Copyright © 2024 Osmania Skills Master 
            Hasan
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
