import React,{useState,useMemo} from 'react'

function ComplexCalculations() {

    const [count,setCount]=useState(0);
    const [dark,setDark]=useState(false);

    const calcComplexCalulation=(num)=>{
        console.log(`number is: ${num}`);
        for(let i=0;i<=99999999;i++){}
        // fake loop to waste resources

        return num*num;
    }

    const memoizedValue=useMemo(()=>calcComplexCalulation(count),[count]);


    const theme = {
    backgroundColor: dark ? "#1a1a1a" : "#f9fafb", // dark vs light
    color: dark ? "white" : "black",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={theme}>
      <div className="p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 transition-all w-[400px] text-center">

        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value) || 0)}
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />

        <h2 className="text-xl font-semibold mb-6">
          Result : <span className="text-blue-600">{memoizedValue}</span>
        </h2>

        <button
          onClick={() => setDark((prev) => !prev)}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
        >
          change theme
        </button>
      </div>
    </div>
  );
}

export default ComplexCalculations;