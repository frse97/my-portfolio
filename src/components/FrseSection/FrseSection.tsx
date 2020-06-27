interface IFrseSectionProps {
  children?: React.ReactNode;
}

const FrseSection: React.FC<IFrseSectionProps> = props => {
  const { children } = props;

  return <section className="frse-section">{children}</section>;
};

export default FrseSection;
