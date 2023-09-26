import Logo from "/src/assets/logo.png";
interface LogotypeProps {
  className?: string;
}

export function Logotype(props: LogotypeProps) {
  return (
    <img
      src={Logo}
      className={`max-w-full w-1/2 md:w-auto mx-auto ${props.className}`}
      draggable="false"
    />
  );
}
