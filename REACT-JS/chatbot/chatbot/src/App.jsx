import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [que, setQue] = useState("");
  const [myAns, setMyAns] = useState([]);

  const genAns = async () => {
    const userMessage = que;
    setMyAns([...myAns, { type: "user", text: userMessage }]);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyChhj8OW1CB3UgQTh9x8cbkZe8qIN8IZRk",
        method: "post",
        data: {
          contents: [{ parts: [{ text: userMessage }] }],
        },
      });

      
      const text = response.data.candidates.map((e) =>
        e.content.parts.map((part) => part.text).join(" ")
      );

      setMyAns((prevAns) => [
        ...prevAns,
        { type: "bot", text: text.join(" ") },
      ]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMyAns((prevAns) => [
        ...prevAns,
        { type: "bot", text: "Sorry, something went wrong." },
      ]);
    }

    setQue("");
  };

  return (
    <div className="chat-container">
      <h1>Chatbot in ReactJS</h1>
      <div className="chat-window">
        {myAns.map((e, i) => (
          <div
            key={i}
            className={`chat-message ${
              e.type === "user" ? "message-user" : "message-bot"
            }`}
          >
            <div className="message-text">{e.text}</div>
          </div>
        ))}
      </div>

     
        <textarea
          value={que}
          onChange={(e) => setQue(e.target.value)}
          placeholder="Type your message here..."
          className="chat-input"
          rows={5}
        ></textarea>
        <button onClick={genAns} className="chat-submit">
          Send
        </button>
    
    </div>
  );
}

export default App;
