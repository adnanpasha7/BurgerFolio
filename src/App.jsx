import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home.jsx";
import WorkInProgress from "./sections/WorkInProgress.jsx"; // adjust path if needed

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wip" element={<WorkInProgress />} />
      {/* Optional: catch-all */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
