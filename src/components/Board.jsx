import React from 'react'

function Board() {
  return (
      <div className=" flex justify-between">
          <div className=" bg-white w-56">TO DO</div>
          <div className=" bg-white w-56">IN WORK</div>
          <div className=" bg-white w-56">REVIEW</div>
          <div className=" bg-white w-56">DONE</div>
      </div>
  );
}

export default Board