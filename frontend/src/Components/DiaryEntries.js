import React from "react";

function DiaryEntries(props) {
  console.log(props);
  return (
    <div class="allPost">
      <div className="postHeading">
        <h3>{props.title}</h3>
        <h6>{Date()}</h6>
      </div>
      <p>{props.body}</p>
    </div>
  );
}

export default DiaryEntries;
