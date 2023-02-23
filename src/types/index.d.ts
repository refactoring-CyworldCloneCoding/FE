declare module "*.png";
declare module "*.gif";

type childrenProps = {
  children: JSX.Element | JSX.Element[];
};

interface IComponent {
  [key: string]: JSX.Element;
}
interface IRandom {
  [key: string]: string;
}

interface Istate {
  setOpen: Dispatch<SetStateAction<boolean>>;
}
