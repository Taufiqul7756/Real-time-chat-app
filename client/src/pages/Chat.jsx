/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Container, Stack } from "react-bootstrap";
// import AllUsers from "../components/Chat/AllUsers";
// import ChatBox from "../components/Chat/ChatBox";
// import UserCard from "../components/Chat/UserChat";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import UserChat from "../components/Chat/UserChat";
import PotentialChats from "../components/Chat/PotentialChats";

const Chat = () => {
  const { user } = useContext(AuthContext);

  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  return (
    <Container>
      <PotentialChats />
      {userChats?.length < 1 ? null : (
        <div className="flex flex-col md:flex-row">
          <div className="flex-grow-0 pe-3">
            <Stack direction="horizontal" gap={3} className="align-items-start">
              <Stack className="messages-box flex-grow-8 pe-3" gap={3}>
                {isUserChatsLoading && <p>Loading CHats...</p>}

                {userChats?.map((chat, index) => {
                  return (
                    <div key={index}>
                      <UserChat chat={chat} user={user} />
                    </div>
                  );
                })}
              </Stack>
              <p>Chatbox</p>
            </Stack>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Chat;
