import React from "react";

const DownloadPDFButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: "0", // Moves the button to the right side
        margin: "10px 0",
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: "#0070f3",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Download as PDF
    </button>
  );
};

export default DownloadPDFButton;
