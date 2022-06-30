import React from "react";

const TodoItem = ({ id, title, status, handleToggle, handleDelete }) => {
  return (
    <div
      style={{
        padding: "1rem",
        border: "3px solid red",
        borderRadius: "1rem",
        display: "flex",
        width:"80%",
        margin:"auto",
        gap: "1rem",
        justifyContent: "center",
        marginTop: "5px"

      }}
    >
      <div>
        <h2>{title}</h2>
      </div>
      <div style={{ paddingTop:"5px" }}>
        <p>{status ? "Done" : "pending"}</p>
      </div>
      <button onClick={() => handleToggle(id)} style={{width:"90px",height:"40px",marginTop:"10px"}}>Toogle</button>
      <button onClick={() => handleDelete(id)} style={{width:"40px",height:"40px",marginTop:"10px"}}>X</button>
    </div>
  );
};
export default TodoItem;
