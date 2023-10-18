import { useRef, useState } from "react";
function StyleChanger() {
  const [colors, setColors] = useState<string[] | string>(["blue", "green"]);
  const [texts, setTexts] = useState(["אני ריבוע כחול", "אני ריבוע ירוק"]);
  return (
    <div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: colors[0] }}
      >
        {texts[0]}
      </div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: colors[1] }}
      >
        {texts[1]}
      </div>
      <button
        onClick={() => {
          setColors(["white", "white"]);
        }}
      >
        שנה ללבן
      </button>
      <button
        onClick={() => {
          setTexts([texts[1], texts[0]]);
        }}
      >
        החלף טקסט
      </button>
    </div>
  );
}
export default StyleChanger;
