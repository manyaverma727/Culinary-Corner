import React from "react";

function ImageGrid() {
  const images = [
    "https://i.pinimg.com/1200x/37/db/7d/37db7da83104c9977b7c6627eae858e0.jpg",
    "https://i.pinimg.com/1200x/1f/aa/71/1faa71cb01466b581e26a45bb864c054.jpg",
    "https://i.pinimg.com/736x/9e/dd/f8/9eddf80182481208d701c6a2c9f0872f.jpg",
    "https://i.pinimg.com/1200x/f3/83/76/f38376539fc2581c756b70efdab73ec1.jpg",
    "https://i.pinimg.com/736x/f0/d9/5c/f0d95c2d8931475584b8ef8b5b24d57c.jpg",
    "https://i.pinimg.com/736x/35/e9/87/35e987658479682eff883cca8040d36f.jpg",
    "https://i.pinimg.com/736x/f0/fd/2d/f0fd2d9f7bcd576be429b4e5bc16d6fc.jpg",
    "https://i.pinimg.com/736x/1c/ac/79/1cac79b42ee473ce594646237d29178c.jpg",
    "https://i.pinimg.com/736x/1d/62/a2/1d62a212a37068f26490b0de55708165.jpg"
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