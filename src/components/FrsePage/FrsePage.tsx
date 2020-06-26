interface IFrsePageProps {
  children?: React.ReactNode;
}

const FrsePage: React.FC<IFrsePageProps> = props => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

export default FrsePage;
