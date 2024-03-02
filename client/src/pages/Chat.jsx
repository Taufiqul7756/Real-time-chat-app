// import React from "react";

import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {
  const { user } = useContext(AuthContext);

  const { userChats, isUserChatsLoading, updateCurrentChat } =
    useContext(ChatContext);

  console.log("userChats----", userChats);
  return (
    <div className="text-3xl text-black font-bold underline p-20">Chat</div>
  );
};

export default Chat;
