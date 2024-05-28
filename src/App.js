import React from "react";
import "./App.css";
import Allroutes from "./routes/Allroutes";
import Headers from "./components/Headers";
import MovieUI from "./components/MovieUI"; // Correct import statement
import "./overall.css";
function App() {
  return (
    <div className="App bg-black w-100 h-100">
      <Headers />
      <MovieUI />
      <Allroutes />
    </div>
  );
}

export default App;
