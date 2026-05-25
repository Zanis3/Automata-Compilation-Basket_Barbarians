import { useState } from "react";

export default function DivisionAlgorithmSwingGUI() {
  const [firstInt, setFirstInt] = useState("");
  const [secondInt, setSecondInt] = useState("");
  const [solution, setSolution] = useState("");
  const [dividend, setDividend] = useState("");
  const [divisor, setDivisor] = useState("");
  const [quotientRemainder, setQuotientRemainder] = useState("");
  const [isError, setIsError] = useState(false);

  const handleCompute = () => {
    const a = parseInt(firstInt);
    const b = parseInt(secondInt);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      setSolution("Please enter POSITIVE INTEGERS ONLY!");
      setIsError(true);
      setDividend("");
      setDivisor("");
      setQuotientRemainder("");
      return;
    }

    setIsError(false);

    const dividendVal = a > b ? a : b;
    const divisorVal = a > b ? b : a;
    const quotient = Math.floor(dividendVal / divisorVal);
    const remainder = dividendVal % divisorVal;

    setSolution(
      dividendVal.toLocaleString() +
        " = " +
        divisorVal.toLocaleString() +
        " (" +
        quotient.toLocaleString() +
        ") + " +
        remainder.toLocaleString(),
    );
    setDividend("The dividend is " + dividendVal.toLocaleString());
    setDivisor("The divisor is " + divisorVal.toLocaleString());
    setQuotientRemainder(
      "The quotient is " +
        quotient.toLocaleString() +
        " and the remainder is " +
        remainder.toLocaleString(),
    );
  };

  return (
    <div className="flex flex-col h-full p-4 gap-1.5 relative">
      <h2 className="text-[#DCDCDC] text-[20px] font-bold font-sans text-center mt-2 mb-1">
        Division Algorithm
      </h2>

      <label className="text-[#DCDCDC] text-[15px] font-bold font-serif mt-3">
        Enter the first integer:
      </label>
      <input
        className="bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] px-2 py-1 text-[14px] font-sans outline-none focus:border-[#0058E6] w-full"
        value={firstInt}
        onChange={(e) => setFirstInt(e.target.value)}
      />

      <label className="text-[#DCDCDC] text-[15px] font-bold font-serif mt-2">
        Enter the second integer:
      </label>
      <input
        className="bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] px-2 py-1 text-[14px] font-sans outline-none focus:border-[#0058E6] w-full"
        value={secondInt}
        onChange={(e) => setSecondInt(e.target.value)}
      />

      <button
        className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-4 py-1 text-[13px] italic font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D] self-center mt-3"
        onClick={handleCompute}
      >
        Compute
      </button>

      <h2 className="text-[#DCDCDC] text-[20px] font-bold font-sans text-center mt-4 mb-1">
        Solution
      </h2>

      <input
        className={`bg-[#1E1E1E] border px-2 py-1 text-[14px] font-sans outline-none w-full max-w-100 self-center ${
          isError
            ? "text-red-500 border-red-500 font-bold"
            : "text-[#DCDCDC] border-[#666666]"
        }`}
        value={solution}
        readOnly
      />

      <div className="flex flex-col gap-1 mt-2 ml-6">
        <p className="text-[#DCDCDC] text-[13px] font-sans">{dividend}</p>
        <p className="text-[#DCDCDC] text-[13px] font-sans">{divisor}</p>
        <p className="text-[#DCDCDC] text-[13px] font-sans">
          {quotientRemainder}
        </p>
      </div>
    </div>
  );
}
