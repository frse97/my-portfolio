import React from 'react';
import './FrseIcon.less';

interface IFrseIcon {
  component: JSX.Element;
}

const FrseIcon: React.FC<IFrseIcon> = props => {
  const { children } = props;

  return (
    <span role="img" className="frse-icon">
      {children}
    </span>
  );
};

export default FrseIcon;
