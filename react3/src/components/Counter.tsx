import { useRef, useState, useEffect } from "react";

const Counter = () => {
  const countRef = useRef(0);

  const [dummyState, setDummyState] = useState({});

  const updateCounter = () => {
    setDummyState({});
  };

  const incrementCount = () => {
    countRef.current += 1;
    updateCounter();
  };

  const resetCount = () => {
    countRef.current = 0;
    updateCounter();
  };
  useEffect(() => {
    console.log("counter num is: ", countRef.current);
    return () => console.log("out");
  }, [countRef.current]);

  return (
    <div>
      <button onClick={incrementCount}>הוסף</button>
      <button onClick={resetCount}>אפס</button>
      <div>{countRef.current}</div>
    </div>
  );
};

export default Counter;
// import { useRef, useState } from "react";

// const Counter = () => {
//   let [add, setAdd] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setAdd((add += 1))}>הוסף</button>

//       <button onClick={() => setAdd(0)}>אפס</button>

//       <div>{add}</div>
//     </div>
//   );
// };

// export default Counter;
