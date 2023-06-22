import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MusicPage from "./pages/MusicPage/MusicPage";
import JournalPage from "./pages/JournalPage/JournalPage";
import ScrapbookPage from "./pages/ScrapbookPage/ScrapbookPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/scrapbook" element={<ScrapbookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
