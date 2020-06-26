interface IFrseHeaderProps {
  children?: React.ReactNode;
}

const FrseHeader: React.FC<IFrseHeaderProps> = props => {
  const { children } = props;

  return <header>{children}</header>;
};

export default FrseHeader;
