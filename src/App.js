import React, { useState } from "react";
import "./styles.css";

const emojiDictonary = {
  "🎬": "Clapper Board",
  "🎻": "Violin",
  "🎺": "Trumpet",
  "🥁": "Drum",
  "🎷 ": "Saxophone",
  "🎧 ": "Headphone",
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🎄": "Christmas Tree",
  "🎅": "Santa Claus",
  "✨": "Sparkles",
  "🎁": "Wrapped Gift",
  "❄️": "Snowflake"
};

export default function App() {
  // Intializing use state
  const [meaning, setMeaning] = useState("");

  // Change Event handler
  function changeEventHandler(event) {
    var inputValue = event.target.value;
    if (emojiDictonary[inputValue] === undefined)
      setMeaning("OOps character cannot be found in database");
    else setMeaning(emojiDictonary[inputValue]);
  }

  function clickHandler(emoji) {
    setMeaning(emojiDictonary[emoji]);
  }

  // Converting objects to array
  const emojis = Object.keys(emojiDictonary);

  return (
    <div className="App">
      <h1>Inside outt</h1>
      <input
        type="text"
        onChange={changeEventHandler}
        placeholder="put an emoji here to know the meaning"
        style={{ width: "80%", padding: "1rem" }}
      />
      <h2>{meaning}</h2>
      <h3>Emoji I Know</h3>
      {/* Displaying all emojis */}
      <div
        style={{
          width: "60%",
          margin: "0 auto"
        }}
      >
        {emojis.map((item) => {
          return (
            <span
              key={item}
              style={{
                fontSize: "2rem",
                margin: "0.5rem 0.5rem",
                cursor: "pointer",
                display: "inline-block"
              }}
              onClick={() => clickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
