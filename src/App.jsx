import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TextEditor from "./components/TextEditor";

export default function App() {
  //OPENS THE SELECTED FILE
  const [activeFile, setActiveFile] = useState("Members.md");

  return (
    <main className="flex w-full h-screen overflow-hidden">
      <Sidebar activeFile={activeFile} setActiveFile={setActiveFile} />
      <TextEditor activeFile={activeFile} />
    </main>
  );
}
