import { useState } from "react";

const SetComplexObject = () => {
  const INITIAL_USER = {
    name: {
      first: "",

      last: "",
    },
    email: "",
  };

  const [user, setUser] = useState(INITIAL_USER);

  return (
    <div>
      {" "}
      <div>
        <br />
        Your Name Is: {user.name.first} {user.name.last}
      </div>
      <div>
        Your email is:
        {user.email}
      </div>{" "}
      <input
        placeholder="Enter First Name"
        onChange={(e) =>
          setUser({ ...user, name: { ...user.name, first: e.target.value } })
        }
      />{" "}
      <input
        placeholder="Enter Last Name"
        onChange={(e) =>
          setUser({ ...user, name: { ...user.name, last: e.target.value } })
        }
      />
      <input
        placeholder="Enter Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <div></div>
    </div>
  );
};
export default SetComplexObject;
