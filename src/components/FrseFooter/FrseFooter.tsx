import React from 'react';
import './FrseFooter.less';

interface IFrseFooterProps {
  children?: React.ReactNode;
}

const FrseFooter: React.FC<IFrseFooterProps> = (props) => {
  const { children } = props;

  return <footer className="frse-footer">{children}</footer>;
};

export default FrseFooter;
