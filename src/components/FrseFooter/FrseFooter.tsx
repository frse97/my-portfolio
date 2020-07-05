import React from 'react';

interface IFrseFooterProps {
  children?: React.ReactNode;
}

const FrseFooter: React.FC<IFrseFooterProps> = (props) => {
  const { children } = props;

  return <footer className="frse-footer">{children}</footer>;
};

export default FrseFooter;
