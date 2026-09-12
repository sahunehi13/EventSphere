import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyEvents from "./pages/MyEvents";
import OrganizerDashboard from "./pages/OrganizerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/events" element={<MyEvents />} />

        <Route path="/organizer" element={<OrganizerDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;