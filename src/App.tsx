import { useState } from "react";
import { ActivityFeed } from "./components/ActivityFeed";
import { DeveloperInfo } from "./components/DeveloperInfo";
import { Logotype } from "./components/Logotype";
import { TileGrid } from "./components/TileGrid";
import { TILES } from "./tiles";

export function App() {
  const [tileStates, setTileStates] = useState(() =>
    new Array<boolean>(16).fill(false),
  );

  const [board, setBoard] = useState(initBoard);
  const [movesCounter, setMovesCounter] = useState(0);
  const [inputDisabled, setInputDisabled] = useState(false);

  const [recentlyOpened, setRecentlyOpened] = useState<number[]>([]);

  function openTile(index: number) {
    setTileStates(tileStates.map((tile, i) => (i === index ? true : tile)));

    if (!recentlyOpened.length) {
      setRecentlyOpened([index]);
    } else if (recentlyOpened.length === 1) {
      const firstOpenedAnimal = board[recentlyOpened[0]];
      const secondOpenedAnimal = board[index];

      if (firstOpenedAnimal !== secondOpenedAnimal) {
        setInputDisabled(true);
        setTimeout(() => {
          setTileStates(
            tileStates.map((tile, i) =>
              i === index || i == recentlyOpened[0] ? false : tile,
            ),
          );
          setInputDisabled(false);
        }, 1000);
      }
      setMovesCounter((count) => count + 1);
      setRecentlyOpened([]);
    }
  }

  function resetBoard() {
    setTileStates(new Array<boolean>(16).fill(false));
    setRecentlyOpened([]);
    setMovesCounter(0);
    setInputDisabled(true);
    setTimeout(() => {
      setBoard(initBoard);
      setInputDisabled(false);
    }, 600);
  }

  return (
    <div className="flex flex-col mx-auto justify-around h-full">
      <div className="grid grid-cols-6 gap-1 md:gap-4 mx-auto md:mt-20">
        <div className="col-start-1 md:col-end-4 md:row-start-1 col-end-7 row-start-2 row-end-3">
          <TileGrid
            openTile={inputDisabled ? undefined : openTile}
            board={board}
            tileStates={tileStates}
          ></TileGrid>
        </div>
        <Logotype />
        <ActivityFeed
          isVictory={isVictory(tileStates)}
          movesCount={movesCounter}
          className="md:col-start-4 col-start-1 col-end-7"
          onReset={resetBoard}
        ></ActivityFeed>
      </div>
      <DeveloperInfo />
    </div>
  );
}

function initBoard() {
  return shuffle([...TILES, ...TILES]);
}

function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function isVictory(tileStates: boolean[]): boolean {
  return tileStates.every((tile) => tile === true) ? true : false;
}
