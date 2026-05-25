import { Coffee, NotepadText, X, Play, Square } from "lucide-react";
import { useState } from "react";

import CollatzSequence from "./CollatzSequence";
import DivisionAlgorithm from "./DivisionAlgorithm";
import EuclideanAlgorithm from "./EuclideanAlgorithm";
import PalindromeChecker from "./PalindromeChecker";
import Recursion from "./Recursion";
import Members from "./Members";

import SwingWindow from "./SwingWindow";
import CollatzSwingGUI from "./swing/CollatzSwingGUI";
import DivisionAlgorithmSwingGUI from "./swing/DivisionAlgorithmSwingGUI";
import EuclideanAlgorithmSwingGUI from "./swing/EuclideanAlgorithmSwingGUI";
import PalindromeCheckerSwingGUI from "./swing/PalindromeCheckerSwingGUI";
import RecursionSwingGUI from "./swing/RecursionSwingGUI";

export default function TextEditor({ activeFile }) {
  const [isRunning, setIsRunning] = useState(false);

  //SWITCH EACH FILES
  const renderActiveComponent = () => {
    switch (activeFile) {
      case "CollatzSequence.java":
        return <CollatzSequence />;
      case "DivisionAlgorithm.java":
        return <DivisionAlgorithm />;
      case "EuclideanAlgorithm.java":
        return <EuclideanAlgorithm />;
      case "PalindromeChecker.java":
        return <PalindromeChecker />;
      case "Recursion.java":
        return <Recursion />;
      case "README.md":
        return <Members />;
      default:
        return (
          <div className="p-6 text-slate-500">
            Select a file from the explorer list.
          </div>
        );
    }
  };

  // RENDER THE SWING GUI POPUP FOR THE ACTIVE FILE
  const renderSwingGUI = () => {
    const commonProps = {
      onClose: () => setIsRunning(false),
    };

    switch (activeFile) {
      case "CollatzSequence.java":
        return (
          <SwingWindow
            title="Collatz Sequence"
            width={600}
            height={300}
            {...commonProps}
          >
            <CollatzSwingGUI />
          </SwingWindow>
        );
      case "DivisionAlgorithm.java":
        return (
          <SwingWindow
            title="Division Algorithm"
            width={540}
            height={600}
            {...commonProps}
          >
            <DivisionAlgorithmSwingGUI />
          </SwingWindow>
        );
      case "EuclideanAlgorithm.java":
        return (
          <SwingWindow
            title="Euclidean Algorithm"
            width={500}
            height={550}
            {...commonProps}
          >
            <EuclideanAlgorithmSwingGUI />
          </SwingWindow>
        );
      case "PalindromeChecker.java":
        return (
          <SwingWindow
            title="Palindrome Checker"
            width={540}
            height={600}
            {...commonProps}
          >
            <PalindromeCheckerSwingGUI />
          </SwingWindow>
        );
      case "Recursion.java":
        return (
          <SwingWindow
            title="Recursion Sequences"
            width={500}
            height={400}
            {...commonProps}
          >
            <RecursionSwingGUI />
          </SwingWindow>
        );
      default:
        return null;
    }
  };

  //CHECKS WHETHER THE FILE IS MARKDOWN OR NOT TO CHANGE ICON
  const isMarkdown = activeFile.endsWith(".md");
  const canRun = !isMarkdown;

  const handleRunClick = () => {
    if (canRun) {
      setIsRunning(true);
    }
  };

  return (
    <section className="grow h-screen min-w-0 flex flex-col items-start overflow-hidden bg-editor relative">
      {/* FOR THE ITEMS ON TOP */}
      <div className="h-10 shrink-0 w-full flex justify-between items-center bg-top-background text-[14px]">
        <nav className="h-full w-auto flex items-center gap-0.5">
          {/* THE DYNAMIC ACTIVE TAB */}
          <div className="h-full w-44 flex items-center justify-center text-white bg-editor border-t-2 border-t-leftmost-hover-border gap-2 px-4 cursor-default">
            {isMarkdown ? (
              <NotepadText size={16} className="text-blue-300" />
            ) : (
              <Coffee size={16} className="text-red-300" />
            )}
            <p className="truncate max-w-30">{activeFile}</p>
            <button className="h-5 w-5 flex items-center justify-center cursor-pointer rounded-md hover:bg-top-x-hover ease-in-out duration-200 ml-1">
              <X size={16} />
            </button>
          </div>

          {/* IF THE TAB IS NOT SELECTED 
          <div className="h-full w-35 flex items-center justify-center text-top-text-unselected bg-sidebar gap-2 cursor-pointer">
            <Coffee size={16} className="text-red-300" />
            <p>TestFile.java</p>
            <button className="h-5 w-5 flex items-center justify-center cursor-pointer rounded-md hover:bg-top-x-hover ease-in-out duration-200">
              <X size={16} />
            </button>
          </div> */}
        </nav>

        {/* RUN THE SELECTED "CODE" */}
        <button
          className={`h-full w-25 flex items-center justify-center cursor-pointer rounded-md gap-1 text-[12px] text-white hover:bg-top-x-hover ease-in-out duration-200 ${!canRun ? "opacity-40 cursor-not-allowed" : ""}`}
          onClick={handleRunClick}
          disabled={!canRun}
        >
          <p className={`${isRunning ? "text-red-300" : ""}`}>
            {" "}
            {isRunning ? "Stop" : "Run Program"}
          </p>
          {isRunning ? (
            <Square size={16} className="text-red-300" />
          ) : (
            <Play size={16} />
          )}
        </button>
      </div>

      {/* FOR THE ITEMS AT THE BOTTOM */}
      <div className="h-auto w-full font-code text-[14px] text-white p-6 leading-relaxed overflow-y-auto whitespace-pre-wrap cursor-text">
        {renderActiveComponent()}
      </div>

      {/* SWING GUI POPUP */}
      {isRunning && renderSwingGUI()}
    </section>
  );
}
