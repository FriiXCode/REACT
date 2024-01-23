import React, { useState } from "react";

interface Props {}

const Listgroup = ({}: Props) => {
  const items = ["LM", "HC", "Prague", "Oslo", "Hlboke"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div>
        <h1>The best cities in the world</h1>
        {items.length === 0 ? <p>No items found</p> : null}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => setSelectedIndex(index)}
            >
              {item}
              {selectedIndex === index && (
                <img
                  src={"srcassetsHLBOKE.jpg"}
                  style={{
                    marginLeft: "350px",
                    maxHeight: "50px",
                    maxWidth: "50px",
                  }}
                />
              )}
            </li>
          ))}
        </ul>
        <img
          src={"srcassetsHLBOKE.jpg"}
          style={{
            marginLeft: "350px",
            marginTop: "250px",
            maxHeight: "100px",
            maxWidth: "100px",
          }}
        />
      </div>
    </>
  );
};

export default Listgroup;
