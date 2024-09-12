import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/slice/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Counter: {count}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
