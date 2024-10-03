import Container from "@/Components/Shared/Container/Container";
import Title from "@/Components/Shared/Text/Title";
import { NotificationData } from "@/lib/Data/notificationData";

import { useState } from "react";
import NotificationCard from "./NotificationCard";
import Button from "@/Components/Shared/Button/Button";

const Notifications = () => {
  const [data, setData] = useState([...NotificationData]);
   const makeAllRead = ()=>{
    const making = NotificationData.map((item)=>{
        return {
            ...item, read: true
        }
    })
    setData([...making])
   }
   const ClearAllNotification = ()=>{
    setData([])
   }
  return (
    <Container>
      <Title text="Notifications" />
      <div className="overflow-hidden rounded-lg  shadow-md mt-10 ">
        {data.map((notification,idx) => (
          <NotificationCard notification={notification} key={idx} setData={setData} data={data}/>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button onClick={makeAllRead} className="font-medium text-blue-600 hover:text-blue-800">
          Mark all as read
        </button>
        <Button  onClick={ClearAllNotification} className="rounded-md bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700">
          Clear all notifications
        </Button>
      </div>
    </Container>
  );
};

export default Notifications;
