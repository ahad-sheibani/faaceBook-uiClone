import Home from "./pages/Home";
import "../src/styles/app.css"

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-black">
      <Home />
      {/* <h1 className="text-blue-600 dark:white">here is the dark mode</h1> */}
    </div>
  );
}

export default App;
