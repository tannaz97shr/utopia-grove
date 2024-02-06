"use client";

import NotificationContext from "@/store/notification-context";
import { useContext } from "react";

function Notification() {
  const { notification } = useContext(NotificationContext);
  return (
    <>
      {notification ? (
        <div
          className={`absolute flex text-center justify-center p-4 border bottom-4 mx-auto w-2/5 left-0 right-0 
        border-border-peach ${
          notification.status === "success"
            ? "bg-success"
            : notification.status === "error"
            ? "bg-error"
            : ""
        }`}
        >
          {notification.message}
        </div>
      ) : null}
    </>
  );
}

export default Notification;
