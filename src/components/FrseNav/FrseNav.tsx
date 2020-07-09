import React from 'react';
import './FrseNav.less';

interface IFrseNavProps {
  children?: React.ReactNode;
}

const FrseNav: React.FC<IFrseNavProps> = (props) => {
  const { children } = props;

  return <nav className="frse-nav">{children}</nav>;
};

export default FrseNav;
