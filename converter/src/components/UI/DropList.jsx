import React from 'react'
import ButtonLine from "./ButtonLine";

function DropList({ name, onAdd }) {
  return (
    <ul className="dropList">
      <li>
        <ButtonLine className={ButtonLine} onClick={onAdd}>
          {name}
        </ButtonLine>
      </li>
    </ul>
  );
}

export default DropList