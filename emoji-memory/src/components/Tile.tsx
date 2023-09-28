import classNames from "classnames";
import BackPattern from "/src/assets/back-pattern.png";

interface TileProps {
  src: string;
  onClick?: () => void;
  isOpened?: boolean;
  flip?: () => void;
}
export function Tile(props: TileProps) {
  return (
    <div
      className={classNames("tile w-20 h-20", props.isOpened && "tile-opened")}
      onClick={props.onClick}>
      <img draggable={false} src={BackPattern} />
      <img draggable={false} src={props.src} />
    </div>
  );
}
