import Note from "../Note";
import { createRef, useRef, useEffect } from "react";

import "./index.css";

const Notes = ({ notes = [], setNotes = () => {} }) => {
  const noteRefs = useRef([]);

  const determineInitialPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 150;
    const headerHeight = 70; // to avoid overlapping of note wih header

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * (maxY - headerHeight) + headerHeight),
    };
  };

  const updateNotePosition = (id, newPos) => {
    const updateNoteVal = notes.map((note) =>
      note.id === id
        ? {
            ...note,
            position: newPos,
          }
        : note
    );
    setNotes(updateNoteVal);
    localStorage.setItem("notes", JSON.stringify(updateNoteVal));
  };

  const computeOverlap = (id) => {
    const curNoteRef = noteRefs.current[id].current;
    const curNoteRect = curNoteRef.getBoundingClientRect();

    return notes.some((note) => {
      if (note.id === id) return false;

      const otherNoteRef = noteRefs.current[note.id].current;
      const otherNoteRect = otherNoteRef.getBoundingClientRect();

      const overlap = !(
        curNoteRect.right < otherNoteRect.left ||
        curNoteRect.left > otherNoteRect.right ||
        curNoteRect.top > otherNoteRect.bottom ||
        curNoteRect.bottom < otherNoteRect.top
      );

      return overlap;
    });
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) => {
      // If note is already present in local storage do not calculate its random position
      const savedNote = savedNotes.find((cur) => cur.id === note.id);

      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const initialPos = determineInitialPosition();
        return { ...note, position: initialPos };
      }
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, [notes.length]);

  const handleMouseDown = (e, note) => {
    const noteRef = noteRefs.current[note.id].current;
    const noteRect = noteRef.getBoundingClientRect();

    const offsetX = e.clientX - noteRect.left;
    const offsetY = e.clientY - noteRect.top;

    const prevPos = note.position;

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      noteRef.style.left = `${newX}px`;
      noteRef.style.top = `${newY}px`;
    };

    const handleMouseUp = () => {
      const finalRect = noteRef.getBoundingClientRect();
      const newPos = { x: finalRect.left, y: finalRect.top };

      if (computeOverlap(note.id)) {
        noteRef.style.left = `${prevPos.x}px`;
        noteRef.style.top = `${prevPos.y}px`;
      } else {
        updateNotePosition(note.id, newPos);
      }

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div>
      {notes.map((note, idx) => (
        <Note
          key={note.id}
          ref={
            noteRefs.current[note.id]
              ? noteRefs.current[note.id]
              : (noteRefs.current[note.id] = createRef())
          }
          content={note.content}
          position={note.position}
          onMouseDown={(e) => handleMouseDown(e, note)}
        />
      ))}
    </div>
  );
};

export default Notes;
