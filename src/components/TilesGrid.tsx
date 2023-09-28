import { Tile } from "./Tile";

interface TilesGridProps {
  tileStates: boolean[];
  openTile?: (index: number) => void;
  board: string[];
}

export function TilesGrid(props: TilesGridProps) {
  return (
    <div className="grid grid-rows-4 grid-cols-4 gap-1 max-w-fit mx-auto">
      {props.board.map((tile: string, index: number) => (
        <Tile
          src={tile}
          key={index}
          isOpened={props.tileStates[index]}
          onClick={
            !props.tileStates[index] ? () => props.openTile?.(index) : undefined
          }
        />
      ))}
    </div>
  );
}
