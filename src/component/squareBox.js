import React from "react";
import Data from "../utils/data.json";

const SquareBox = React.memo((props) => {
    const { boxnum, player } = props;
    let ladder = Data.ladder.filter(
        (value) => value.start == boxnum || value.end == boxnum
    );
    let snake = Data.snake.filter(
        (value) => value.head == boxnum || value.tail == boxnum
    );
    console.log("i am called for ", boxnum);
    console.log("herererere", player);
    return (
        <div className={boxnum % 2 ? "bluegrey-box" : "beige-box"} key={boxnum}>
            <p>{boxnum}</p>
            <div style={{ display: "flex" }}>
                {Boolean(ladder.length) && <div>{ladder[0].label}</div>}
                {Boolean(snake.length) && <div>{snake[0].label}</div>}
                {player &&
                    player.map((item, index) => {
                        return (
                            <div
                                className="circle"
                                style={{ background: item.color }}
                                key={boxnum + "_" + index}
                            ></div>
                        );
                    })}
            </div>
        </div>
    );
});

export default SquareBox;
