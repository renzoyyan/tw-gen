type GroupProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Group = ({ children, ...props }: GroupProps) => {
  return <div {...props}>{children}</div>;
};
