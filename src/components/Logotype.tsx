import Logo from "/src/assets/logo.png";

export function Logotype() {
  return (
    <img
      src={Logo}
      className="w-1/2 md:w-auto mx-auto md:col-start-4 col-start-1 row-start-1 col-end-7 max-w-xs"
      draggable="false"
    />
  );
}
