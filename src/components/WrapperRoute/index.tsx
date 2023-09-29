import Navbar from '../Navbar';

export function WrapperRoute({
  component,
}: {
  component: JSX.Element;
}): JSX.Element {
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}
