import Confetti from "react-confetti";
import Repeat from "../assets/repeat.png";

interface ActivityFeedProps {
  className?: string;
  onReset: () => void;
  movesCount: number;
  isVictory: boolean;
}
export function ActivityFeed(props: ActivityFeedProps) {
  return (
    <div className={`${props.className} font-bold text-2xl`}>
      <p>
        {props.isVictory
          ? `You won in ${props.movesCount} moves!`
          : `moves: ${props.movesCount}`}
      </p>
      <button
        onClick={props.onReset}
        className={`flex flex-row flex-middle items-center gap-2 bg-blue-900 px-4 py-1 rounded-xl mt-4 mx-auto ${
          !props.isVictory && "invisible"
        }`}
      >
        Try Again <img src={Repeat} className="w-6" />
      </button>
      {props.isVictory && <Confetti />}
    </div>
  );
}
