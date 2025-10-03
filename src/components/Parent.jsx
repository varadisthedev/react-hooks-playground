import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child re-rendered");
  return <button  onClick={onClick}>Click Me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div className="p-3 rounded-2xl gap-8 shadow-2xl bg-white dark:bg-gray-800 transition-all w-[400px] text-center ">
      <h1 className="text-xl font-semibold ">{count}</h1>
      <button onClick={() => setCount(count + 1)} className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition">Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
export default Parent;