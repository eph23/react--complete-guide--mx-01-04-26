import { useState } from "react";

function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = function () {
        setIsEditing(!isEditing);
    };

    return (
        <li>
            <span className="player">
                {isEditing ? (
                    <input type="text" value={name} required />
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
