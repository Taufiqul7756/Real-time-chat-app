import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const PotentialChats = () => {
  const { potentialChats } = useContext(ChatContext);

  console.log("potentialChats", potentialChats);
  return (
    <>
      <div className="all-users">
        {potentialChats &&
          potentialChats.map((u, index) => {
            return (
              <div key={index} className="single-user">
                {u.first_name} {u.last_name}
                <span className="user-online"></span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PotentialChats;
