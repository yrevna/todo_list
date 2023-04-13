import React from "react";

export default function FilterButton(props) {
  return (
    <button
      type="button"
      id={props.id}
      className="btn toggle-btn"
      aria-pressed="true"
    >
      {props.name}
    </button>
  );
}
