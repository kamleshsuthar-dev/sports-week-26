import { allGames } from '../data/gamesData';
import { GameDetailCard } from '../components/GameDetailCard';

const findGame = (id) => allGames.find(g => g.id === id);

export function CricketPage() {
  return <GameDetailCard game={findGame('cricket')} />;
}

export function TugOfWarPage() {
  return <GameDetailCard game={findGame('tugofwar')} />;
}

export function KabaddiPage() {
  return <GameDetailCard game={findGame('kabaddi')} />;
}

export function VolleyballPage() {
  return <GameDetailCard game={findGame('volleyball')} />;
}

export function KhoKhoBoysPage() {
  return <GameDetailCard game={findGame('khokho-boys')} />;
}

export function KhoKhoGirlsPage() {
  return <GameDetailCard game={findGame('khokho-girls')} />;
}

export function BadmintonBoysPage() {
  return <GameDetailCard game={findGame('badminton-boys')} />;
}

export function BadmintonGirlsPage() {
  return <GameDetailCard game={findGame('badminton-girls')} />;
}

export function TableTennisPage() {
  return <GameDetailCard game={findGame('tabletennis')} />;
}

export function ChessPage() {
  return <GameDetailCard game={findGame('chess')} />;
}

export function CarromPage() {
  return <GameDetailCard game={findGame('carrom')} />;
}

export function GullyCricketGirlsPage() {
  return <GameDetailCard game={findGame('gullycricket-girls')} />;
}
