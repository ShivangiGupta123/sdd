import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Decrement, Increment } from "../../redux/action";

function Counter() {
  const count = useSelector((state) => state.changevalue);
  const dispatch = useDispatch();
  const Up = () => {
    dispatch(Increment(1));
  };
  const Down = () => {
    if (count > 0) {
      dispatch(Decrement(1));
    }
  };
  return (
    <div>
      <div className="row">
        <button type="button" onClick={() => Down()}>
          -
        </button>
        <input type="text" value={count} />
        <button type="button" onClick={() => Up()}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
