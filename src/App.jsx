import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { GameDetailCard } from './components/GameDetailCard';
import { allGames } from './data/gamesData';
import './index.css';
import { Navbar } from './components/Navbar';

function GameDetailPage({ gameId }) {
  const game = allGames.find(g => g.id === gameId);
  if (!game) {
    return <div>Game not found</div>;
  }
  return <GameDetailCard game={game} />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/game/tugofwar" element={<GameDetailPage gameId="tugofwar" />} />
        <Route path="/game/cricket" element={<GameDetailPage gameId="cricket" />} />
        <Route path="/game/kabaddi" element={<GameDetailPage gameId="kabaddi" />} />
        <Route path="/game/volleyball" element={<GameDetailPage gameId="volleyball" />} />
        <Route path="/game/khokho-boys" element={<GameDetailPage gameId="khokho-boys" />} />
        <Route path="/game/khokho-girls" element={<GameDetailPage gameId="khokho-girls" />} />
        <Route path="/game/badminton-boys" element={<GameDetailPage gameId="badminton-boys" />} />
        <Route path="/game/badminton-girls" element={<GameDetailPage gameId="badminton-girls" />} />
        <Route path="/game/tabletennis" element={<GameDetailPage gameId="tabletennis" />} />
        <Route path="/game/chess" element={<GameDetailPage gameId="chess" />} />
        <Route path="/game/carrom" element={<GameDetailPage gameId="carrom" />} />
        <Route path="/game/gullycricket-girls" element={<GameDetailPage gameId="gullycricket-girls" />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

