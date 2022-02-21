import ViewHome from "./components/ViewHome/ViewHome";
import Gnome from "./pages/Gnome/Gnome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ViewHome />
      <Routes>
        <Route path="Gnome/:name" element={<Gnome />} />
      </Routes>
    </Router>
  );
}

export default App;
