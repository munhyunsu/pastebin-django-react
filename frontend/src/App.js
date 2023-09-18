import React, { useEffect, useState } from "react";
import './App.css';

function WriteBar() {
  return (
    <form action="index.html" method="post">
      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Enter username" name="username" required></input>
      <label for="content"><b>Content</b></label>
      <textarea name="content" placeholder="Enter content" required></textarea>
      <button type="submit">Paste Note</button>
    </form>
  );
}

function Card ({ paste }) {
  return (
    <div>
      <h3>{paste.user}</h3>
      <p>{paste.content}</p>
    </div>
  );
}

function Timeline ({ pastes }) {
  const rows = [];

  pastes.forEach((paste) => {
    rows.push(<Card paste={paste} />);
  });

  return (
    <div>
      {rows}
    </div>
  );
}

function WritableTimeline({ pastes }) {
  return (
    <div>
      <WriteBar />
      <Timeline pastes={pastes} />
    </div>
  );
}

function App() {
  const [pastes, setPastes] = useState([]);

  const fetchPastes = (() => {
    fetch("http://34.64.47.124/pastebin/api/v1/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPastes(data);
      })
  });

  useEffect(() => {
    fetchPastes();
  });

  return <WritableTimeline pastes={pastes} />;
}

export default App;
