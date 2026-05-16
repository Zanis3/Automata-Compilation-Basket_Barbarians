import { useState } from "react";

//FOR LEFTMOST
import {
  Files,
  Search,
  GitFork,
  Play,
  Blocks,
  CircleUser,
  Settings,
} from "lucide-react";

//FOR SIDEBAR
import {
  Ellipsis,
  ChevronDown,
  ChevronRight,
  Coffee,
  NotepadText,
} from "lucide-react";

export default function Sidebar() {
  //LEFTMOST ICONS
  const leftmostIcons = [Search, GitFork, Play, Blocks];

  //SIDEBAR
  const sidebarItems = [
    "CollatzSequence.java",
    "DivisionAlgorithm.java",
    "EuclideanAlgorithm.java",
    "PalindromeChecker.java",
    "Recursion.java",
  ];

  //SHOW/HIDE SIDEBAR
  const [sidebar, setSidebar] = useState(true);

  //SHOW/HIDE JAVA ITEMS
  const [list, setList] = useState(true);

  return (
    <aside className="h-screen flex items-center justify-center bg-sidebar text-white text-[12px] font-sidebar">
      {/* LEFTMOST SIDEBAR */}
      <div className="w-12 h-screen bg-leftmost flex flex-col">
        {/* FILES BUTTON (SHOWS/HIDES THE SIDEBAR) */}
        <button
          onClick={() => setSidebar(!sidebar)}
          className={`w-full h-12 flex items-center justify-center ${sidebar ? "bg-leftmost-hover border-l-2 border-l-leftmost-hover-border" : "text-leftmost-unselected"} cursor-pointer`}
        >
          <Files size={28} />
        </button>

        {leftmostIcons.map((Icon, index) => (
          <button
            className="w-full h-12 flex items-center justify-center text-leftmost-unselected cursor-not-allowed"
            disabled
            key={index}
          >
            <Icon size={28} />
          </button>
        ))}

        <button
          className="w-full h-12 flex items-center justify-center text-leftmost-unselected cursor-not-allowed mt-auto"
          disabled
        >
          <CircleUser size={28} />
        </button>

        <button
          className="w-full h-12 flex items-center justify-center text-leftmost-unselected cursor-not-allowed"
          disabled
        >
          <Settings size={28} />
        </button>
      </div>

      {/* MAIN SIDEBAR */}
      {sidebar && (
        <div className="grow w-60 h-screen flex flex-col items-start bg-sidebar">
          {/* SHOWS/HIDES LIST */}
          <div className="w-full flex items-center justify-between p-2.5">
            <p className="font-semibold">EXPLORER</p>
            <Ellipsis size={12} />
          </div>

          <button
            className="w-full flex items-center bg-sidebar-selected gap-0.5 p-0.5 cursor-pointer"
            onClick={() => setList(!list)}
          >
            {list ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <p className="font-bold">AUTOMATA-COMPILATION-BB</p>
          </button>

          {/* LIST OF THE PROGRAMS */}
          {list && (
            <ul className="w-full">
              {sidebarItems.map((item, index) => (
                <li
                  key={index}
                  className="w-full flex items-center gap-1.5 px-5 py-0.5 hover:bg-sidebar-selected cursor-pointer"
                >
                  <Coffee size={14} className="text-red-300" />
                  <p>{item}</p>
                </li>
              ))}
              <li className="w-full flex items-center gap-1.5 px-5 py-0.5 hover:bg-sidebar-selected cursor-pointer">
                <NotepadText size={14} className="text-blue-300" />
                <p>Members.md</p>
              </li>
            </ul>
          )}

          <div
            className={`w-full flex items-center bg-sidebar-selected gap-0.5 p-0.5 cursor-not-allowed ${list ? "mt-auto" : ""}`}
          >
            <ChevronRight size={16} />
            <p className="font-bold">OUTLINE</p>
          </div>
          <div className="w-full flex items-center bg-sidebar-selected gap-0.5 p-0.5 cursor-not-allowed">
            <ChevronRight size={16} />
            <p className="font-bold">TIMELINE</p>
          </div>
        </div>
      )}
    </aside>
  );
}
