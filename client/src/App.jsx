import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import StatsPage from "./pages/StatsPage";
import FindingPlayerPage from "./components/FindPlayer";
import Countdown from "./components/countdown";
import EnterWordPage from "./components/EnterWordPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RulesPage from "./pages/RulesPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/find-player" element={<FindingPlayerPage/>}/>
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/game-rules" element={<RulesPage /> } />
          <Route path="/enter-word" element={<EnterWordPage /> } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
