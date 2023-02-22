declare module "*.png";
declare module "*.gif";

type childrenProps = {
  children: JSX.Element | JSX.Element[];
};

interface IComponent {
  [key: string]: JSX.Element;
}
