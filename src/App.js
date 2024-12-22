import { BrowserRouter, Routes, Route} from "react-router-dom"
// import { Link } from "react-router-dom"
// pages
import Home from "./pages/Home"

import Create from "./pages/Create"
import Update from "./pages/Update"

import './index.css';
// import First from "./components/First";
// import Second from "./pages/second";



function App() {
  return (
    <BrowserRouter>
  <nav class="navbar">
    <div class="logo">My book!</div>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/create">Fill your Chioce</a></li>
      <li><a href="/update">Concept</a></li>
      {/* <li><a href="src/components/first.js">First</a></li> */}
    </ul>
  </nav>

  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        {/* <Route path="/Second" element={<Second />} /> */}
        <Route path="/:id" element={<Update />} />
        {/* <Route path="src/components/first.js" element={<First />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
