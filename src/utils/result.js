import Data from "./data.json";
export const ScoreCalculator = (score, num) => {
    if (score + num > 100) {
        return score;
    }
    score = score + num;
    let ladderScore = Data.ladder.find((item) => item.start == score);
    if (ladderScore) return ladderScore.end;

    let snake = Data.snake.find((item) => item.head == score);
    if (snake) return snake.tail;

    return score;
};

export const numToString = (num) => Data.sides[num];
