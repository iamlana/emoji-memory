import BackPattern from "/src/assets/back-pattern.png";

interface TileProps {
  src: string;
  onClick?: () => void;
  isOpened?: boolean;
}
export function Tile(props: TileProps) {
  return (
    <img
      src={props.isOpened ? props.src : BackPattern}
      alt="Flip Card"
      onClick={props.onClick}
      className="sm:w-20 sm:h-20 w-14 h-14 max-w-fit hover:drop-shadow hover:scale-105"
      draggable="false"></img>
  );
}
