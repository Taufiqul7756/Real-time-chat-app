/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import { Stack } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipent";
import moment from "moment";
import InputEmoji from "react-input-emoji";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const {
    currentChat,
    messages,
    sendTextMessage,
    isMessagesLoading,
    deleteMessage,
  } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);
  const [textMessage, setTextMessage] = useState("");
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!recipientUser)
    return (
      <p style={{ textAlign: "center", width: "100%" }}>
        No conversation selected yet..
      </p>
    );

  if (isMessagesLoading)
    return (
      <p style={{ textAlign: "center", width: "100%" }}>Loading chat...</p>
    );

  return (
    <Stack
      gap={4}
      className="  max-h-[calc(100vh-10rem)] min-w-[calc(100vh-rem)]
      md:min-w-[calc(100vh-rem)] lg:min-w-[calc(100vh-10rem)] overflow-y-auto bg-[#eee9e9] rounded-lg"
    >
      <div className="flex items-center justify-center p-3 bg-gray-800">
        <strong>
          {recipientUser?.first_name} {recipientUser?.last_name}
        </strong>
      </div>
      <Stack
        gap={3}
        className="max-h-[calc(100vh-15rem)] overflow-y-auto px-8 "
      >
        {messages &&
          messages.map((message, index) => (
            <Stack
              key={index}
              className={`${
                message?.senderId === user?._id
                  ? "bg-[#4779c4] p-3 rounded-lg max-w-[70%] self align-self-end flex-grow-0 "
                  : "bg-[#c3c6c6] text-black p-3 rounded-lg max-w-[70%] self align-self-start flex-grow-0"
              }`}
              ref={scroll}
            >
              <span className="line-clamp-2">{message.text} </span>

              <div className="">
                <span className="text-xs self-end font-normal mt-2">
                  {" "}
                  {moment(message.createdAt).calendar()}{" "}
                </span>
                {/* <button onClick={() => deleteMessage(message._id)}>Delete</button> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#FF0000"
                  className="bi bi-archive-fill cursor-pointer mt-2"
                  viewBox="0 0 16 16"
                  onClick={() => deleteMessage(message._id)}
                >
                  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                </svg>
              </div>
            </Stack>
          ))}
      </Stack>
      <Stack
        direction="horizontal"
        className="chat-input flex-grow-0  "
        gap={3}
      >
        <InputEmoji
          value={textMessage}
          onChange={setTextMessage}
          fontFamily="nunito"
          borderColor="rgba(72, 112, 223, 0.2)"
        />
        <button
          className="send-btn "
          onClick={() =>
            sendTextMessage(textMessage, user, currentChat._id, setTextMessage)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-send-fill ml-2"
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
          </svg>
        </button>
      </Stack>
    </Stack>
  );
};

export default ChatBox;
