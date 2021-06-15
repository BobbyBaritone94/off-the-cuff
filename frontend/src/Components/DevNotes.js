import React, { useEffect, useRef, useState } from "react";
import DiaryEntries from "./DiaryEntries";

function DevNotes(props) {
  let [list, setList] = useState([]);

  useEffect(() => {}, [list]);
  //did git get this change

  const addToList = (e) => {
    e.preventDefault();
    list.push(
      <li>
        <DiaryEntries
          title={titleRef.current.value}
          body={bodyRef.current.value}
        />
      </li>
    );
    console.log(list);
    const newList = list;
    setList(newList);
  };

  const titleRef = useRef();
  const bodyRef = useRef();

  return (
    <div>
      <h1>Developer Notes</h1>
      <ul>{list}</ul>

      <div className="theForm">
        <input ref={titleRef} type="text" placeholder="Title"></input>
        <textarea
          ref={bodyRef}
          type="text"
          placeholder="write out your process"
        ></textarea>
        <button onClick={addToList}>Post</button>
      </div>
    </div>
  );
}

export default DevNotes;
