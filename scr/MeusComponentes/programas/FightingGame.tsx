// @ts-ignore
import React from "react";

type FightingGame = {
    jogadorWho: String;
    jogadorUser: String;
};

class FightingGameProps {
}

const FightingGame: React.FG<FightingGameProps> =
    ({jogadorWho = "Computador", jogadorUser}) => {
    return (
        <div>

        </div>
    );
};