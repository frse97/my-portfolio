interface IFrseSectionProps {
  children?: React.ReactNode;
}

const FrseSection: React.FC<IFrseSectionProps> = props => {
  const { children } = props;

  return <section>{children}</section>;
};

export default FrseSection;
