import { Coffee, NotepadText, X, Play } from "lucide-react";

export default function TextEditor() {
  return (
    <section className="grow h-screen flex flex-col items-start bg-editor">
      {/* FOR THE ITEMS ON TOP */}
      <div className="h-10 w-full flex justify-between items-center bg-top-background text-[14px]">
        <nav className="h-full w-auto flex items-center gap-0.5">
          {/* IF THE TAB IS THE ONE SELECTED */}
          <div className="h-full w-35 flex items-center justify-center text-white bg-editor border-t-2 border-t-leftmost-hover-border gap-2 cursor-pointer">
            <Coffee size={16} className="text-red-300" />
            <p>TestFile.java</p>
            <button className="h-5 w-5 flex items-center justify-center cursor-pointer rounded-md hover:bg-top-x-hover">
              <X size={16} />
            </button>
          </div>

          {/* IF THE TAB IS NOT SELECTED */}
          <div className="h-full w-35 flex items-center justify-center text-top-text-unselected bg-sidebar gap-2 cursor-pointer">
            <Coffee size={16} className="text-red-300" />
            <p>TestFile2.java</p>
            <button className="h-5 w-5 flex items-center justify-center cursor-pointer rounded-md hover:bg-top-x-hover">
              <X size={16} />
            </button>
          </div>
        </nav>

        {/* RUN THE SELECTED CODE */}
        <button className="h-full w-10 flex items-center justify-center cursor-pointer rounded-md text-white hover:bg-top-x-hover">
          <Play size={16} />
        </button>
      </div>

      {/* FOR THE ITEMS AT THE BOTTOM */}
      <div className="h-auto w-full font-code text-[14px]">
        <h1>section test</h1>
      </div>
    </section>
  );
}
