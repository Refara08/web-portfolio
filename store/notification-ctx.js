import React, { useState, useEffect } from "react";

const NotificationContext = React.createContext({
  status: null,
  message: null,
  updateStatus: () => {},
  updateMessage: () => {},
});

export const NotificationContextProvider = (props) => {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
        setMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, message]);

  const statusHandler = (status) => {
    setStatus(status);
  };

  const messageHandler = (message) => {
    setMessage(message);
  };

  const defaultVal = {
    status,
    message,
    updateStatus: statusHandler,
    updateMessage: messageHandler,
  };

  return (
    <NotificationContext.Provider value={defaultVal}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
