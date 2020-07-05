import React from 'react';
interface IFrseHeaderProps {
  children?: React.ReactNode;
}

const FrseHeader: React.FC<IFrseHeaderProps> = (props) => {
  const { children } = props;

  return <header className="frse-header">{children}</header>;
};

export default FrseHeader;
