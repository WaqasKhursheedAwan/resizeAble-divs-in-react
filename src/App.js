import React from "react";
import { Resizable } from "re-resizable";
import "./App.css";

const App = () => {
  const resizableData = [
    { id: 1, backgroundColor: "red" },
    { id: 2, backgroundColor: "green" },
    { id: 3, backgroundColor: "blue" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          gap: "20px",
          overflow: "hidden",
        }}
      >
        {resizableData.map((item) => (
          <Resizable
            key={item.id}
            defaultSize={{
              width: 320,
              height: 200,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: item.backgroundColor,
              }}
            >
              Resizable Content
            </div>
          </Resizable>
        ))}
      </div>
    </>
  );
};

export default App;
