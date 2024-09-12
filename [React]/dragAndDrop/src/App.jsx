import { useState } from "react";
import Notes from "./components/Notes";

import "./index.css";

const DEFAULT_NOTES = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa magnam labore, ad voluptatem odio ipsum! Ab voluptatum assumenda eligendi et quasi odio, ratione culpa eaque saepe suscipit quisquam? Assumenda.",
  },
  {
    id: 2,
    content:
      "Ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa magnam labore, ad voluptatem odio ipsum! Ab voluptatum assumenda eligendi et quasi odio, ratione culpa eaque saepe suscipit quisquam? Assumenda.",
  },
];

function App() {
  const [notes, setNotes] = useState(DEFAULT_NOTES);

  return (
    <div className="main_container">
      <div className="header">DRAG AND DROP</div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
