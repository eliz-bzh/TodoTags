import { Routes, Route } from "react-router-dom";
import { Desktop1 } from "./Desktop1";

import { Desktop3 } from "./Desktop3";

import { Desktop2 } from "./Desktop2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Desktop1 />} />

      <Route path="/desktop-3" element={<Desktop3 />} />

      <Route path="/desktop-2" element={<Desktop2 />} />
    </Routes>
  );
}
export default App;
