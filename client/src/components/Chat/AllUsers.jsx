import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat } = useContext(ChatContext);
  const { onlineUsers } = useContext(ChatContext);

  return (
    <>
      <div className="all-users">
        {potentialChats &&
          potentialChats.map((receiver, index) => (
            <div
              className="bg-[#2edde7] cursor-pointer p-2 rounded-lg mr-1 relative"
              key={index}
              onClick={() => createChat(user._id, receiver._id)}
            >
              {receiver.name}
              <span
                className={
                  onlineUsers?.some((user) => user?.userId === receiver?._id)
                    ? "user-online"
                    : ""
                }
              ></span>
            </div>
          ))}
      </div>
    </>
  );
};

export default AllUsers;
