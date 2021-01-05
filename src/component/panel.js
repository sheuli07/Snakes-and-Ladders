import React, { useState } from "react";
import { ScoreCalculator, numToString } from "../utils/result";

function Panel(props) {
    const { playerList, setPlayer } = props;
    const [selectNumber, setSelectNumber] = React.useState(1);
    const [rolling, setrolling] = useState(false);
    const [isNext, setisNext] = useState(true);
    const setNumber = (num) => {
        let player = isNext ? "A" : "B";
        setSelectNumber(num);
        setPlayer(
            [...playerList].map((item) => {
                if (item.name === player) {
                    return {
                        ...item,
                        score: ScoreCalculator(item.score, num),
                    };
                }
                return item;
            })
        );
        setisNext(!isNext);
    };

    const reset = () => {
        setisNext(true);
        setSelectNumber(1);
        setPlayer(
            [...playerList].map((item) => {
                return {
                    ...item,
                    score: 0,
                };
            })
        );
    };

    return (
        <div className="panel-box">
            <div>
                {playerList.map((item) => {
                    return (
                        <div
                            style={{
                                padding: "4px",
                                backgroundColor: item.color,
                                color: "#FFFFFF",
                                fontWeight: 600,
                            }}
                        >
                            <p>{`${item.name} Player score: ${item.score}`}</p>
                        </div>
                    );
                })}
            </div>

            <div className="dice-container">
                {playerList.filter((item) => item.score == 100)[0] ? (
                    <p>
                        {`${
                            playerList.filter((item) => item.score == 100)[0]
                                .name
                        } Wins`}
                    </p>
                ) : (
                    <p>The Next Player is: {isNext ? "A" : "B"}</p>
                )}
                {/* <div className="bluegrey-box">{selectNumber}</div> */}

                <i
                    className={`dice fas fa-dice-${numToString(selectNumber)} ${
                        rolling && "dice-rolling"
                    }`}
                ></i>
                {!playerList.filter((item) => item.score == 100)[0] ? (
                    <button
                        onClick={() => {
                            setrolling(true);
                            setTimeout(() => {
                                setrolling(false);
                                setNumber(Math.ceil(Math.random() * 6));
                            }, 1000);
                        }}
                        disabled={rolling}
                    >
                        Roll Dice
                    </button>
                ) : (
                    <button onClick={() => reset()}>Play Again</button>
                )}
            </div>
        </div>
    );
}

export default Panel;
