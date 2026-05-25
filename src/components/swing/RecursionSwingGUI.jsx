import { useState } from "react";

function buildSequenceString(seq) {
  return seq.map((n) => (n >= 1000 ? n.toLocaleString() : n)).join(" , ");
}

export default function RecursionSwingGUI() {
  const [screen, setScreen] = useState("MENU");
  const [fibInput, setFibInput] = useState("");
  const [lucInput, setLucInput] = useState("");
  const [triInput, setTriInput] = useState("");
  const [fibOutput, setFibOutput] = useState("");
  const [lucOutput, setLucOutput] = useState("");
  const [triOutput, setTriOutput] = useState("");

  const computeFibonacci = () => {
    const n = parseInt(fibInput.trim());
    if (isNaN(n) || !Number.isInteger(n) || n <= 2) {
      setFibOutput("Invalid input. Number of terms must be a whole number greater than 2.");
      return;
    }
    const seq = new Array(n);
    seq[0] = 0;
    seq[1] = 1;
    for (let i = 2; i < n; i++) {
      seq[i] = seq[i - 1] + seq[i - 2];
    }
    setFibOutput(
      "This program will find all the terms of the Fibonacci numbers.\n" +
        "Number of terms: " +
        n +
        "\n\n" +
        "The Fibonacci numbers are:\n" +
        buildSequenceString(seq),
    );
  };

  const computeLucas = () => {
    const n = parseInt(lucInput.trim());
    if (isNaN(n) || !Number.isInteger(n) || n <= 2) {
      setLucOutput("Invalid input. Number of terms must be greater than 2.");
      return;
    }
    const seq = new Array(n);
    seq[0] = 2;
    seq[1] = 1;
    for (let i = 2; i < n; i++) {
      seq[i] = seq[i - 1] + seq[i - 2];
    }
    setLucOutput(
      "This program will find all the terms of the Lucas numbers.\n" +
        "Number of terms: " +
        n +
        "\n\n" +
        "The Lucas numbers are:\n" +
        buildSequenceString(seq),
    );
  };

  const computeTribonacci = () => {
    const n = parseInt(triInput.trim());
    if (isNaN(n) || !Number.isInteger(n) || n <= 3) {
      setTriOutput("Invalid input. Number of terms must be greater than 3.");
      return;
    }
    const seq = new Array(n);
    seq[0] = 0;
    seq[1] = 0;
    seq[2] = 1;
    for (let i = 3; i < n; i++) {
      seq[i] = seq[i - 1] + seq[i - 2] + seq[i - 3];
    }
    setTriOutput(
      "This program will find all the terms of the Tribonacci numbers.\n" +
        "Number of terms: " +
        n +
        "\n\n" +
        "The Tribonacci numbers are:\n" +
        buildSequenceString(seq),
    );
  };

  const goToMenu = () => {
    setScreen("MENU");
    setFibInput("");
    setFibOutput("");
    setLucInput("");
    setLucOutput("");
    setTriInput("");
    setTriOutput("");
  };

  return (
    <div className="flex flex-col h-full p-4">
      {screen === "MENU" && (
        <div className="flex flex-col items-center justify-center h-full gap-3">
          <h2 className="text-[#DCDCDC] text-[18px] font-bold font-sans">
            RECURSION SEQUENCES
          </h2>
          <div className="flex flex-col gap-2.5 w-full max-w-55">
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-3 py-1.5 text-[13px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D] text-left"
              onClick={() => setScreen("FIB")}
            >
              1. Fibonacci Numbers
            </button>
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-3 py-1.5 text-[13px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D] text-left"
              onClick={() => setScreen("LUC")}
            >
              2. Lucas Numbers
            </button>
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-3 py-1.5 text-[13px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D] text-left"
              onClick={() => setScreen("TRI")}
            >
              3. Tribonacci Numbers
            </button>
          </div>
          <p className="text-[#DCDCDC] text-[10px] italic font-sans mt-2">
            Prof. Lester G. Diampoc, MSME
          </p>
        </div>
      )}

      {screen === "FIB" && (
        <div className="flex flex-col h-full gap-2">
          <h3 className="text-[#DCDCDC] text-[15px] font-bold font-sans">
            Fibonacci Numbers
          </h3>
          <p className="text-[#DCDCDC] text-[11px] font-sans">
            Formula: F(n) = F(n-1) + F(n-2), F(0)=0, F(1)=1
          </p>
          <p className="text-[#DCDCDC] text-[11px] font-sans">
            Example: 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
          </p>
          <div className="flex items-center gap-2 flex-wrap mt-1">
            <label className="text-[#DCDCDC] text-[12px] font-sans">
              Number of terms (&gt; 2):
            </label>
            <input
              className="bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] px-1.5 py-0.5 text-[12px] font-sans outline-none focus:border-[#0058E6] w-12.5 max-sm:w-15"
              value={fibInput}
              onChange={(e) => setFibInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && computeFibonacci()}
            />
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-2.5 py-0.5 text-[12px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D]"
              onClick={computeFibonacci}
            >
              Compute
            </button>
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-2.5 py-0.5 text-[12px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D]"
              onClick={goToMenu}
            >
              Back to Menu
            </button>
          </div>
          <textarea
            className="flex-1 bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] p-2 text-[12px] font-mono resize-none outline-none mt-1"
            value={fibOutput}
            readOnly
          />
        </div>
      )}

      {screen === "LUC" && (
        <div className="flex flex-col h-full gap-2">
          <h3 className="text-[#DCDCDC] text-[15px] font-bold font-sans">
            Lucas Numbers
          </h3>
          <p className="text-[#DCDCDC] text-[11px] font-sans">
            Formula: L(n) = L(n-1) + L(n-2), L(0)=2, L(1)=1
          </p>
          <p className="text-[#DCDCDC] text-[11px] font-sans">
            Example: 2, 1, 3, 4, 7, 11, 18, 29 ...
          </p>
          <div className="flex items-center gap-2 flex-wrap mt-1">
            <label className="text-[#DCDCDC] text-[12px] font-sans">
              Number of terms (&gt; 2):
            </label>
            <input
              className="bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] px-1.5 py-0.5 text-[12px] font-sans outline-none focus:border-[#0058E6] w-12.5 max-sm:w-15"
              value={lucInput}
              onChange={(e) => setLucInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && computeLucas()}
            />
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-2.5 py-0.5 text-[12px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D]"
              onClick={computeLucas}
            >
              Compute
            </button>
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-2.5 py-0.5 text-[12px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D]"
              onClick={goToMenu}
            >
              Back to Menu
            </button>
          </div>
          <textarea
            className="flex-1 bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] p-2 text-[12px] font-mono resize-none outline-none mt-1"
            value={lucOutput}
            readOnly
          />
        </div>
      )}

      {screen === "TRI" && (
        <div className="flex flex-col h-full gap-2">
          <h3 className="text-[#DCDCDC] text-[15px] font-bold font-sans">
            Tribonacci Numbers
          </h3>
          <p className="text-[#DCDCDC] text-[11px] font-sans">
            Formula: T(n) = T(n-1) + T(n-2) + T(n-3), T(0)=0, T(1)=0, T(2)=1
          </p>
          <p className="text-[#DCDCDC] text-[11px] font-sans">
            Example: 0, 0, 1, 1, 2, 4, 7, 13, 24, 44 ...
          </p>
          <div className="flex items-center gap-2 flex-wrap mt-1">
            <label className="text-[#DCDCDC] text-[12px] font-sans">
              Number of terms (&gt; 3):
            </label>
            <input
              className="bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] px-1.5 py-0.5 text-[12px] font-sans outline-none focus:border-[#0058E6] w-12.5 max-sm:w-15"
              value={triInput}
              onChange={(e) => setTriInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && computeTribonacci()}
            />
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-2.5 py-0.5 text-[12px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D]"
              onClick={computeTribonacci}
            >
              Compute
            </button>
            <button
              className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-2.5 py-0.5 text-[12px] font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D]"
              onClick={goToMenu}
            >
              Back to Menu
            </button>
          </div>
          <textarea
            className="flex-1 bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] p-2 text-[12px] font-mono resize-none outline-none mt-1"
            value={triOutput}
            readOnly
          />
        </div>
      )}
    </div>
  );
}
