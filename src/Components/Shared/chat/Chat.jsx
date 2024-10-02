import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    const onLoad = () => {
      const tawkContainer = document.querySelector("#tawkchat-container");
      if (tawkContainer) {
        tawkContainer.style.width = "400px !important";
        tawkContainer.style.height = "500px !important";
      }
    };
    onLoad();
  }, []);
  return <div></div>;
};

export default Chat;
