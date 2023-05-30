import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import Modal1 from "./components/Modal1.jsx";
import Modal2 from "./components/Modal2.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />}>
            <Route path="modal-1" element={<Modal1 />} />
            <Route path="modal-2" element={<Modal2 />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
