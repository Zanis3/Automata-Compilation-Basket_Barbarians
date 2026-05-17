import { useState } from "react";

export default function PalindromeCheckerSwingGUI() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("This will show the result.");
  const [length, setLength] = useState("This will show the length.");
  const [isPalindrome, setIsPalindrome] = useState(null);

  const findLength = (str) => {
    let count = 0;
    try {
      while (str.charAt(count) !== "") {
        count++;
      }
    } catch (e) {
      // end of string
    }
    return count;
  };

  const handleCheck = () => {
    const str = input;
    const len = findLength(str);

    let start = 0;
    let end = len - 1;
    let palindrome = true;

    while (start < end) {
      let left = str.charAt(start);
      let right = str.charAt(end);

      if (left >= "A" && left <= "Z") {
        left = String.fromCharCode(left.charCodeAt(0) + 32);
      }
      if (right >= "A" && right <= "Z") {
        right = String.fromCharCode(right.charCodeAt(0) + 32);
      }

      if (left !== right) {
        palindrome = false;
        break;
      }

      start++;
      end--;
    }

    if (palindrome) {
      setResult('The word "' + str + '" is a palindrome!');
      setIsPalindrome(true);
    } else {
      setResult('The word "' + str + '" is not a palindrome.');
      setIsPalindrome(false);
    }

    setLength("Length: " + len);
  };

  return (
    <div className="flex flex-col h-full p-4 items-center gap-3">
      <h2 className="text-[#DCDCDC] text-[20px] font-bold font-sans mt-2 max-sm:text-[17px]">
        Palindrome Checker
      </h2>

      <input
        className="bg-[#1E1E1E] text-[#DCDCDC] border border-[#666666] px-3 py-2 text-[16px] font-sans outline-none focus:border-[#0058E6] w-full max-w-70 text-center"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleCheck()}
        placeholder="Type a word..."
      />

      <button
        className="bg-[#3C3C3C] text-[#DCDCDC] border border-[#666666] px-4 py-2 text-[13px] italic font-sans cursor-pointer hover:bg-[#505050] active:bg-[#2D2D2D] w-full max-w-70"
        onClick={handleCheck}
      >
        Check if Palindrome
      </button>

      <p
        className={`text-[13px] italic font-sans text-center ${
          isPalindrome === true
            ? "text-green-400"
            : isPalindrome === false
              ? "text-red-400"
              : "text-[#DCDCDC]"
        }`}
      >
        {result}
      </p>
      <p className="text-[13px] italic font-sans text-center text-[#DCDCDC]">
        {length}
      </p>
    </div>
  );
}
