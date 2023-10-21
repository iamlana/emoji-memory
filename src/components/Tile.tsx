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
      className={classNames(
        "perspective-1000 relative w-16 h-16 md:w-20 md:h-20",
        props.isOpened && "tile-opened",
      )}
      onClick={props.onClick}
    >
      <img
        className={classNames(
          "absolute tile-transition",
          props.isOpened ? "rotate-y-0" : "rotate-y-180",
        )}
        draggable={false}
        src={BackPattern}
      />
      <img
        className={classNames(
          "absolute tile-transition",
          props.isOpened ? "rotate-y-0 opacity-100" : "rotate-y-180 opacity-0",
        )}
        draggable={false}
        src={props.src}
      />
    </div>
  );
}
