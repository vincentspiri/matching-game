const Header = ({ handleNewGame, wins }) => {

  return (
    <header className="header">
      <h4>Wins: {wins}</h4>
      <h3>Memory Game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default Header;
