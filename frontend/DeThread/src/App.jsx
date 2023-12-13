import CommentPage from "./pages/CommentPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import Group from "./pages/Group.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommentPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/group" element={<Group />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
