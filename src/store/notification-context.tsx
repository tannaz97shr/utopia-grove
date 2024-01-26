"use client";

import { INotificationContext, INotificationType } from "@/models/general";
import { createContext, useEffect, useState } from "react";

interface NotificationContextProviderProps {
  children: React.ReactNode;
}

const NotificationContext = createContext<INotificationContext>({
  notification: undefined, // { title, message, status }
  showNotification: (notificationData: INotificationType) => {},
  hideNotification: function () {},
});

export const NotificationContextProvider = ({
  children,
}: NotificationContextProviderProps) => {
  const [activeNotification, setActiveNotification] =
    useState<INotificationType | null>();
  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error" ||
        activeNotification.status === "pending")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData: INotificationType) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context: INotificationContext = {
    notification: activeNotification,
    showNotification: (notification: INotificationType) =>
      showNotificationHandler(notification),
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
