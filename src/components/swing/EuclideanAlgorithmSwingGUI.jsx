import { useState } from "react";

export default function EuclideanAlgorithmSwingGUI() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [output, setOutput] = useState("");

  const handleCompute = () => {
    const a = parseInt(first.trim());
    const b = parseInt(second.trim());

    if (isNaN(a) || isNaN(b)) {
      setOutput("Invalid input. Please enter an integer only.");
      return;
    }

    const m = a > b ? a : b;
    const n = a > b ? b : a;

    let dividend = m;
    let divisor = n;
    let gcd = 0;
    let result = "SOLUTION:\n";

    while (true) {
      const quotient = Math.floor(dividend / divisor);
      const remainder = dividend % divisor;

      if (remainder === 0) {
        result +=
          dividend.toLocaleString() +
          " = " +
          divisor.toLocaleString() +
          "(" +
          quotient.toLocaleString() +
          ")\n";
        gcd = divisor;
        break;
      } else {
        result +=
          dividend +
          " = " +
          divisor +
          "(" +
          quotient +
          ")" +
          " + " +
          remainder +
          "\n";
      }
      dividend = divisor;
      divisor = remainder;
    }

    const lcm = (m * n) / gcd;

    result +=
      "\nThe integers are " + m.toLocaleString() + " and " + n.toLocaleString();
    result +=
      "\nThe greatest common divisor of " +
      m.toLocaleString() +
      " and " +
      n.toLocaleString() +
      " is " +
      gcd.toLocaleString();
    result +=
      "\nThe least common multiplier of " +
      m.toLocaleString() +
      " and " +
      n.toLocaleString() +
      " is " +
      lcm.toLocaleString();

    setOutput(result);
  };

  const handleClear = () => {
    setFirst("");
    setSecond("");
    setOutput("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Title header */}
      <div className="bg-[#1E64C8] text-white text-center py-2.5 text-[16px] font-bold font-sans">
        Euclidean Algorithm
      </div>

      {/* Input panel */}
      <div className="border border-[#808080] mx-2 mt-2 p-2 rounded-sm">
        <p className="text-[#DCDCDC] text-[11px] font-sans font-bold mb-1.5">
          Input
        </p>
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <label className="text-[#DCDCDC] text-[12px] font-sans sm:w-40">
              Enter the first integer:
            </label>
            <input
              className="w-full sm:flex-1 bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] px-1.5 py-0.5 text-[12px] font-sans outline-none focus:border-[#0058E6]"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <label className="text-[#DCDCDC] text-[12px] font-sans sm:w-40">
              Enter the second integer:
            </label>
            <input
              className="w-full sm:flex-1 bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] px-1.5 py-0.5 text-[12px] font-sans outline-none focus:border-[#0058E6]"
              value={second}
              onChange={(e) => setSecond(e.target.value)}
            />
          </div>
          <div className="flex gap-2 mt-1">
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-3 py-0.5 text-[12px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D]"
              onClick={handleCompute}
            >
              Compute
            </button>
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-3 py-0.5 text-[12px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D]"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="flex-1 border border-[#808080] mx-2 mt-2 mb-2 p-2 rounded-sm">
        <p className="text-[#DCDCDC] text-[11px] font-sans font-bold mb-1">
          Solution
        </p>
        <textarea
          className="w-full h-[calc(100%-20px)] bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] p-2 text-[12px] font-mono resize-none outline-none"
          value={output}
          readOnly
          placeholder="Solution will appear here..."
        />
      </div>
    </div>
  );
}
