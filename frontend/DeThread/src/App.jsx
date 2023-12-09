import CommentPage from "./pages/CommentPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommentPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
