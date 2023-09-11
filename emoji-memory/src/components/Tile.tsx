import BackPattern from "/src/assets/back-pattern.png";

interface TileProps {
  src: string;
  onClick: () => void;
  isFlipped?: boolean;
}
export function Tile(props: TileProps) {
  return (
    <img
      src={props.isFlipped ? props.src : BackPattern}
      alt="Flip Card"
      onClick={props.onClick}
      className="w-20 h-20 max-w-fit hover:drop-shadow hover:scale-105"></img>
  );
}
