import { useState } from "react";

export default function CollatzSwingGUI() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const generateCollatz = () => {
    const n = parseInt(input);
    let result = "";

    if (isNaN(n) || n <= 0 || n % 2 === 0) {
      result = "INVALID OUTPUT";
      setOutput(result);
      return;
    }

    result +=
      "This program will find all the terms of the Collatz sequence.\n\n";
    result += "Initial value: " + n + "\n";
    result += "The Collatz sequence are:\n";

    let current = n;
    while (current !== 1) {
      result += current + " , ";
      if (current % 2 === 0) {
        current = current / 2;
      } else {
        current = 3 * current + 1;
      }
    }
    result += 1;

    setOutput(result);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="flex flex-col h-full p-2 gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        <label className="text-[#DCDCDC] text-[12px] font-sans">
          Input The Initial Value:
        </label>
        <input
          className="bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] px-1.5 py-0.5 text-[12px] font-sans outline-none focus:border-[#0058E6] w-20"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && generateCollatz()}
        />
        <button
          className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-2.5 py-0.5 text-[12px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D]"
          onClick={generateCollatz}
        >
          Submit
        </button>
        <button
          className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-2.5 py-0.5 text-[12px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D]"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <textarea
        className="flex-1 bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] p-2 text-[12px] font-mono resize-none outline-none"
        value={output}
        readOnly
        placeholder="Output will appear here..."
      />
    </div>
  );
}
