import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img src={selectedUser.avatar} className="card-img-top rounded-circle m-auto img-fluid" style={{width: '100px'}}/>
          <p>  {selectedUser.first_name} {selectedUser.last_name}</p>
        </div>
      ) : <div>No users</div>}
    </>
  );
};

export default Profile;
