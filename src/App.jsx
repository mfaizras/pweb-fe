import DestinationPage from "./pages/DestinationPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowDestinationPage from "./pages/ShowDestinationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/destination/:id" element={<ShowDestinationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
