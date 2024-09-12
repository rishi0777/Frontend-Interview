import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {explorer.isFolder ? (
        <>
          <div
            onClick={() => setShowContent((prev) => !prev)}
            style={{ cursor: "pointer" }}
          >
            {showContent ? <>▶️</> : <>🔽</>}
            {explorer.name}
          </div>
          {showContent && (
            <div style={{ marginLeft: "10px" }}>
              {explorer.items.map((exp, idx) => (
                <Folder key={`folder-${idx}`} explorer={exp} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div>{explorer.name}</div>
      )}
    </>
  );
};

export default Folder;
