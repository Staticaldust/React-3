import React, { useRef } from "react";

const MyComponent = () => {
  const myRef = useRef(null);

  if (myRef.current) {
    myRef.current = "Text updated via useRef";
  }

  return <div ref={myRef}>Initial Text</div>;
};

export default MyComponent;
