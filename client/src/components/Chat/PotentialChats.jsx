/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const PotentialChats = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);

  console.log("onlineUsers from potential", onlineUsers);

  return (
    <>
      <div className="all-users">
        {potentialChats &&
          potentialChats.map((u, index) => {
            return (
              <div
                key={index}
                className="single-user"
                onClick={() => createChat(user._id, u._id)}
              >
                {u.first_name} {u.last_name}
                <span
                  className={
                    Array.isArray(onlineUsers) &&
                    onlineUsers?.some((user) => user?.userId === u?._id)
                      ? "user-online"
                      : ""
                  }
                ></span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PotentialChats;
