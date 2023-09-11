import "./App.css";
import { ActivityFeed } from "./components/ActivityFeed";
import { TilesGrid } from "./components/TilesGrid";

export function App() {
  return (
    <div className="flex md:flex-row flex-col justify-between w-max gap-4 ">
      <TilesGrid></TilesGrid>
      <ActivityFeed></ActivityFeed>
    </div>
  );
}
