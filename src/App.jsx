import Sidebar from "./components/Sidebar";
import TextEditor from "./components/TextEditor";

export default function App() {
  return (
    <main className="flex w-full h-screen">
      <Sidebar />
      <TextEditor />
    </main>
  );
}
