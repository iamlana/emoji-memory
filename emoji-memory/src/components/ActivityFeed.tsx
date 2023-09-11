import Logo from "/src/assets/logo.png";

function ActivityFeed() {
  return (
    <div className="flex flex-col">
      <img src={Logo} className="max-w-full w-auto" />
      <p>moves: 13</p>
      <button>try again</button>
    </div>
  );
}

export default ActivityFeed;
