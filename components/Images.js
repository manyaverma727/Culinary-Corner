import React from "react";

function ImageGrid() {
  const images = [
    "/saved1.jpg",
    "/saved2.jpg",
    "/saved3.jpg",
    "/saved4.jpg",
    "/saved5.jpg",
    "/saved6.jpg",
    "/saved7.jpg",
    "/saved8.jpg",
    "/saved9.jpg"
  ];

  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        padding: "16px",
        maxHeight: "80vh",
        overflowY: "scroll",
        justifyContent: "flex-start"
      }
    },
    images.map((src, index) =>
      React.createElement("img", {
        key: index,
        src: src,
        alt: `Food ${index + 1}`,
        style: {
          width: "23%",     
          height: "auto",
          borderRadius: "12px",
          objectFit: "cover"
        }
      })
    )
  );
}

export default ImageGrid;