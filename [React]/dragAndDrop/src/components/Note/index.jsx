import { forwardRef } from "react";
import "./index.css";

const Note = forwardRef(({ content, position, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="note"
      style={{ left: `${position?.x}px`, top: `${position?.y}px` }}
      {...props}
    >
      <div className="content">📌 {content}</div>
    </div>
  );
});

export default Note;
