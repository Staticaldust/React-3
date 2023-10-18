import { useState, useRef } from "react";
import uuid from "react-uuid";

function AddUsers() {
  const user = {
    name: "",
    id: "",
    email: "",
  };
  const [usersArray, setUserArray] = useState([
    {
      name: "Tomer kapoon",
      id: "1",
      email: "tomer@gmail.com",
    },
    {
      name: "Zion barooch",
      id: "2",
      email: "zion@gmail.com",
    },
    {
      name: "Daniel redclif",
      id: "3",
      email: "daniel@gmail.com",
    },
  ]);
  const [userName, setUserName] = useState(user);
  const [lastUser, setLastUser] = useState(user);
  const refi = useRef<HTMLDivElement>(null);

  const fn = () => {
    if (refi.current) refi.current.innerHTML = "david";
    console.dir(refi.current);
  };

  return (
    <div>
      <button onClick={fn}>+++</button>
      <div>your name is: {lastUser.name}</div>
      <div>your id is: {lastUser.id}</div>
      <div>your email is: {lastUser.email}</div>
      <input
        placeholder="Enter Name"
        onChange={(e) => setUserName({ ...userName, name: e.target.value })}
      />

      <input
        placeholder="Enter Email"
        onChange={(e) => {
          setUserName({ ...userName, email: e.target.value, id: uuid() });
        }}
      />

      <button
        onClick={() => {
          setUserName({ ...userName });
          setUserArray([...usersArray, userName]);
          setLastUser(userName);
        }}
      >
        הוסף משתמש
      </button>
      <div id="ref-div" ref={refi}></div>
    </div>
  );
}
export default AddUsers;
