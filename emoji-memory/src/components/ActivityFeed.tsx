import Repeat from '../assets/repeat.png';
interface ActivityFeedProps {
  className?: string;
}
export function ActivityFeed(props: ActivityFeedProps) {
  return (
    <div className={`${props.className} font-bold text-2xl`}>
      <p>moves: 13</p>
      <button className="flex flex-row flex-middle items-center gap-2 bg-blue-900 px-4 py-1 rounded-xl mt-4 mx-auto">Try Again <img src={Repeat} className='w-6'/></button>
    </div>
  );
}
