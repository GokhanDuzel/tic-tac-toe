import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName)

  const onClickHandler = () => {
    setIsEditing((editing) => !editing);
  };

  const onChangeHandler = (event) => {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" required  value={playerName} onChange={onChangeHandler}/>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickHandler}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;
