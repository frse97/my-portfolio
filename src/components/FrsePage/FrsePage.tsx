import React from 'react';
import './FrsePage.less';
interface IFrsePageProps {
  children?: React.ReactNode;
}

const FrsePage: React.FC<IFrsePageProps> = (props) => {
  const { children } = props;

  return <div className="frse-page">{children}</div>;
};

export default FrsePage;
