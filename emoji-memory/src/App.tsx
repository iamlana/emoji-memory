import { useState } from "react";
import "./App.css";
import { ActivityFeed } from "./components/ActivityFeed";
import { DeveloperInfo } from "./components/DeveloperInfo";
import { Logotype } from "./components/Logo";
import { TilesGrid } from "./components/TilesGrid";
import Bear from "/src/assets/emojis/bear.png";
import Dog from "/src/assets/emojis/dog.png";
import Fox from "/src/assets/emojis/fox.png";
import Frog from "/src/assets/emojis/frog.png";
import Kitty from "/src/assets/emojis/kitty.png";
import Mouse from "/src/assets/emojis/mouse.png";
import Pig from "/src/assets/emojis/pig.png";
import Unicorn from "/src/assets/emojis/unicorn.png";

export function App() {
  const [tileStates, setTileStates] = useState(() =>
    new Array<boolean>(16).fill(false)
  );

  const [board] = useState(initBoard);
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
              i === index || i == recentlyOpened[0] ? false : tile
            )
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
    shuffle(board);
    setMovesCounter(0);
  }

  return (
    <div className="flex flex-col mx-auto justify-between h-[calc(100vh_-_40px)] max-w-screen-xl">
      <div className="grid grid-cols-6 gap-4 mx-auto md:mt-20">
        <div className="col-start-1 md:col-end-4 md:row-start-1 col-end-7 row-start-2 row-end-3">
          <TilesGrid
            openTile={inputDisabled ? undefined : openTile}
            board={board}
            tileStates={tileStates}></TilesGrid>
        </div>
        <Logotype className="md:col-start-4 col-start-1 row-start-1 col-end-7 max-w-xs" />
        <ActivityFeed
          isVictory={isVictory(tileStates)}
          movesCount={movesCounter}
          className="md:col-start-4 col-start-1 col-end-7"
          onReset={resetBoard}></ActivityFeed>
      </div>
      <DeveloperInfo />
    </div>
  );
}

function initBoard() {
  const tiles = [Bear, Dog, Fox, Frog, Kitty, Mouse, Pig, Unicorn];
  return shuffle([...tiles, ...tiles]);
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
