import { useState } from "react";
import "./project.css";
function Project() {
  const [message, setMessage] = useState();
  const [data, setData] = useState();

  function getValue(e) {
    setMessage(e.target.value);
  }
  console.log(message);
  return (
    <div className="main">
      <h1>Message Board</h1>
      <input type="text" placeholder="Write your message" onChange={getValue} />
      <button onClick={() => setData(message)}>Save</button>
      <h2>Message:{data}</h2>
    </div>
  );
}
export default Project;
