/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState(null);

  useEffect(() => {
    const getUserChats = async () => {
      setIsUserChatsLoading(true);
      setUserChatsError(null);
      if (user?._id) {
        const userId = user?._id;
        const response = await getRequest(`${baseUrl}/chats/${userId}`);
        setIsUserChatsLoading(false);

        if (response.error) {
          return setUserChatsError(response);
        }
        setUserChats(response);
      }
      //   setUserChatsLoading(false);
    };
    getUserChats();
  }, [user]);

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        userChatsError,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
