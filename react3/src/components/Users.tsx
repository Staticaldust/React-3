import { useState, useRef } from "react";
import uuid from "react-uuid";

function AddUsers() {
  const user = {
    name: " ",
    id: " ",
    email: " ",
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
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const namedivRef = useRef<HTMLDivElement>(null);
  const emaildivRef = useRef<HTMLDivElement>(null);
  const iddivRef = useRef<HTMLDivElement>(null);

  const fn = () => {
    if (
      nameRef &&
      emailRef &&
      namedivRef.current &&
      emaildivRef.current &&
      iddivRef.current
    ) {
      namedivRef.current.innerText = "your name is: " + nameRef.current?.value;
      emaildivRef.current.innerText =
        "your email is: " + emailRef.current?.value;
      iddivRef.current.innerText = "your id is: " + uuid();
    }
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <div ref={namedivRef}></div>
      <div ref={emaildivRef}></div>
      <div ref={iddivRef}></div>
      <input ref={nameRef} placeholder="Enter Name" className="form-control" />
      <input ref={emailRef} placeholder="Enter Email" />
      <button
        className="btn btn-info mt-3"
        onClick={() => {
          fn();
        }}
      >
        הוסף משתמש
      </button>
    </div>
  );
}
export default AddUsers;
