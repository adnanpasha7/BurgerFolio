import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home.jsx";
import Loader from "./components/Loader.jsx";
import WorkInProgress from "./sections/WorkInProgress.jsx";
import NotFound from "./sections/NotFound.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wip" element={<WorkInProgress />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
