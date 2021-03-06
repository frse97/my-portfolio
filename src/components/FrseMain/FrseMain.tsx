import React from 'react';
import './FrseMain.less';
interface IFrseMainProps {
  children?: React.ReactNode;
}

const FrseMain: React.FC<IFrseMainProps> = (props) => {
  const { children } = props;

  return <main className="frse-main">{children}</main>;
};

export default FrseMain;
