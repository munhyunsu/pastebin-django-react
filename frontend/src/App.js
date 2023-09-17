import './App.css';

const PASTES = [
  {"id": 1, "user": "user1", "utime": "2023-09-17T14:04:04.886488Z", "content": "user1 content"},
  {"id": 2, "user": "user2", "utime": "2023-09-17T14:04:12.778037Z", "content": "user2 content"},
  {"id": 3, "user": "user2", "utime": "2023-09-17T14:06:34.077729Z", "content": "user2 content"}
];

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
  return <WritableTimeline pastes={PASTES} />;
}

export default App;
