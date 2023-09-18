import React, { useEffect, useState } from "react";
import './App.css';

function WriteBar() {
  const [formData, setFormData] = useState({
    username: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const  handleSubmit = (e) => {
    fetch("http://34.64.47.124/pastebin/api/v1/pastes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Enter username" value={formData.username} name="username" onChange={handleChange} required></input>
      <label for="content"><b>Content</b></label>
      <textarea name="content" placeholder="Enter content" value={formData.content} onChange={handleChange} required></textarea>
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
    fetch("http://34.64.47.124/pastebin/api/v1/pastes")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPastes(data);
      })
  });

  useEffect(() => {
    fetchPastes();
  }, []);

  return <WritableTimeline pastes={pastes} />;
}

export default App;
