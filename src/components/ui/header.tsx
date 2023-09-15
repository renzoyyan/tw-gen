type HeaderProps = {
  title: string;
  subTitle?: string;
};
export const Header = (props: HeaderProps) => {
  return (
    <header className="stepper__header">
      <h2 className="stepper__heading">{props.title}</h2>
      <p className="stepper__sub-heading">{props.subTitle}</p>
    </header>
  );
};
