import { useState } from "react";
import { Tile } from "./Tile";
import Bear from "/src/assets/emojis/bear.png";
import Dog from "/src/assets/emojis/dog.png";
import Fox from "/src/assets/emojis/fox.png";
import Frog from "/src/assets/emojis/frog.png";
import Kitty from "/src/assets/emojis/kitty.png";
import Mouse from "/src/assets/emojis/mouse.png";
import Pig from "/src/assets/emojis/pig.png";
import Unicorn from "/src/assets/emojis/unicorn.png";

export function TilesGrid() {
  const [tileStates, setTileStates] = useState(() =>
    new Array<boolean>(16).fill(false)
  );

  const [board] = useState(initBoard);

  function flipTile(index: number) {
    setTileStates(tileStates.map((tile, i) => (i === index ? !tile : tile)));
  }

  return (
    <div className="grid grid-rows-4 grid-cols-4 gap-4 max-w-fit">
      {board.map((tile: string, index: number) => (
        <Tile
          src={tile}
          key={index}
          isFlipped={tileStates[index]}
          onClick={() => flipTile(index)}
        />
      ))}
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
