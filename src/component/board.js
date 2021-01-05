import React, { useState } from "react";
import SquareBox from "./squareBox";
import Panel from "./panel";

function Board() {
    const [player, setPlayer] = useState([
        {
            name: "A",
            score: 0,
            color: "red",
        },
        {
            name: "B",
            score: 0,
            color: "blue",
        },
    ]);

    return (
        <div style={{ display: "inline-flex" }}>
            <div className="board">
                {[...new Array(10)].map((item, rowindex) => {
                    return (
                        <div
                            className={
                                rowindex % 2 == 0 ? "row" : "row_reverse"
                            }
                            key={rowindex}
                        >
                            {[...new Array(10)].map((item2, columnindex) => {
                                let playerInBox = player.filter(
                                    (eachPlayer) =>
                                        eachPlayer.score ==
                                        rowindex * 10 + columnindex + 1
                                );
                                return (
                                    <SquareBox
                                        key={rowindex * 10 + columnindex + 1}
                                        boxnum={rowindex * 10 + columnindex + 1}
                                        // player={player}
                                        player={
                                            Boolean(playerInBox.length)
                                                ? playerInBox
                                                : undefined
                                        }
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            <Panel playerList={player} setPlayer={setPlayer} />
        </div>
    );
}

export default Board;
