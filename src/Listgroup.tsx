import React from "react";
import { ReactNode } from "react";
import { MouseEvent } from "react";

interface Props {}

const Listgroup = ({}: Props) => {
  let items = ["LM", "HC", "Prague", "Oslo", "Hlboke"];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <div>
        <h1>The best cities in the world</h1>
        {items.length === 0 ? <p>No items found</p> : null}
        <ul className="list-group">
          {items.map((item, index) => (
            <li className="list-group-item" key={item} onClick={handleClick}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Listgroup;
