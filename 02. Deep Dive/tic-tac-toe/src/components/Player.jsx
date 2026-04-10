import { useState } from "react";

function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = function () {
        setIsEditing(true);
    };

    return (
        <li>
            <span className="player">
                {isEditing ? (
                    <input type="text" />
                ) : (
                    <span className="player-name">{name}</span>
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}

export default Player;
