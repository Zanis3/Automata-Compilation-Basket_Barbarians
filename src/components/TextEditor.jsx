import { Coffee, NotepadText, X, Play, Square } from "lucide-react";

import CollatzSequence from "./CollatzSequence";
import DivisionAlgorithm from "./DivisionAlgorithm";
import EuclideanAlgorithm from "./EuclideanAlgorithm";
import PalindromeChecker from "./PalindromeChecker";
import Recursion from "./Recursion";
import Members from "./Members";

export default function TextEditor({ activeFile }) {
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
      case "Members.md":
        return <Members />;
      default:
        return (
          <div className="p-6 text-slate-500">
            Select a file from the explorer list.
          </div>
        );
    }
  };

  //CHECKS WHETHER THE FILE IS MARKDOWN OR NOT TO CHANGE ICON
  const isMarkdown = activeFile.endsWith(".md");

  return (
    <section className="grow h-screen min-w-0 flex flex-col items-start overflow-hidden bg-editor">
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

          {/* IF THE TAB IS NOT SELECTED */}
          <div className="h-full w-35 flex items-center justify-center text-top-text-unselected bg-sidebar gap-2 cursor-pointer">
            <Coffee size={16} className="text-red-300" />
            <p>TestFile2.java</p>
            <button className="h-5 w-5 flex items-center justify-center cursor-pointer rounded-md hover:bg-top-x-hover ease-in-out duration-200">
              <X size={16} />
            </button>
          </div>
        </nav>

        {/* RUN THE SELECTED "CODE" */}
        <button className="h-full w-10 flex items-center justify-center cursor-pointer rounded-md text-white hover:bg-top-x-hover ease-in-out duration-200">
          <Play size={16} />{" "}
          {/* WILL TURN TO <Square size={16} /> AND UPON CLICKING, WILL STOP RUNNING */}
        </button>
      </div>

      {/* FOR THE ITEMS AT THE BOTTOM */}
      <div className="h-auto w-full font-code text-[14px] text-white p-6 leading-relaxed overflow-y-auto whitespace-pre-wrap cursor-text">
        {renderActiveComponent()}
      </div>
    </section>
  );
}
