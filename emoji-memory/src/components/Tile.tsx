interface TileProps {
  src: string;
}

function Tile(props: TileProps) {
  return <img src={props.src} className="w-20 h-20 max-w-fit"></img>;
}

export default Tile;
