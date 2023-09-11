import Tile from "./Tile";
import Bear from "/src/assets/emojis/bear.png";
import Dog from "/src/assets/emojis/dog.png";
import Fox from "/src/assets/emojis/fox.png";
import Frog from "/src/assets/emojis/frog.png";
import Kitty from "/src/assets/emojis/kitty.png";
import Mouse from "/src/assets/emojis/mouse.png";
import Pig from "/src/assets/emojis/pig.png";
import Unicorn from "/src/assets/emojis/unicorn.png";

function TilesGrid() {
  return (
    <div className="grid grid-rows-4 grid-cols-4 gap-4 max-w-fit">
      <Tile src={Bear} />
      <Tile src={Dog} />
      <Tile src={Fox} />
      <Tile src={Frog} />
      <Tile src={Kitty} />
      <Tile src={Mouse} />
      <Tile src={Pig} />
      <Tile src={Unicorn} />
      <Tile src={Bear} />
      <Tile src={Dog} />
      <Tile src={Fox} />
      <Tile src={Frog} />
      <Tile src={Kitty} />
      <Tile src={Mouse} />
      <Tile src={Pig} />
      <Tile src={Unicorn} />
    </div>
  );
}

export default TilesGrid;
