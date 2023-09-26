import "./App.css";
import { ActivityFeed } from "./components/ActivityFeed";
import { DeveloperInfo } from "./components/DeveloperInfo";
import { Logotype } from "./components/Logo";
import { TilesGrid } from "./components/TilesGrid";

export function App() {
  return (
    <div className="flex flex-col mx-auto justify-between h-[calc(100vh_-_40px)] max-w-screen-xl">
      <div className="grid grid-cols-6 gap-4 mx-auto md:mt-20">
        <div className="col-start-1 md:col-end-4 md:row-start-1 col-end-7 row-start-2 row-end-3">
          <TilesGrid></TilesGrid>
        </div>
        <Logotype className="md:col-start-4 col-start-1 row-start-1 col-end-7 max-w-xs" />
        <ActivityFeed className="md:col-start-4 col-start-1 col-end-7 "></ActivityFeed>
      </div>
      <DeveloperInfo />
    </div>
  );
}
