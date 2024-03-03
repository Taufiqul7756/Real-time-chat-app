// import React from "react";

import { Stack } from "react-bootstrap";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipent";
import avatar from "../../assets/avarter.svg";

// eslint-disable-next-line react/prop-types
const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);

  return (
    <Stack
      direction="horizontal"
      gap={3}
      className=" user-card align-items-center p-2 justify-content-between"
      role="button"
    >
      <div className="d-flex">
        <div className="me-2">
          <img src={avatar} height="35px" width="35px" alt="" />
        </div>
        <div className="text-content">
          <div className="name">
            {recipientUser?.first_name} {recipientUser?.last_name}{" "}
          </div>
          <div className="text"> Test Messages </div>
        </div>
      </div>

      <div className=" d-flex flex-column align-items-end">
        <div className="date">12/12/24</div>
        <div className="this-user-notifications">2</div>
        <span className="user-online"></span>
      </div>
    </Stack>
  );
};

export default UserChat;
