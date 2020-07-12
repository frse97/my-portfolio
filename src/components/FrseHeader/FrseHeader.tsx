import React from 'react';
import cs from 'classnames';
import './FrseHeader.less';
interface IFrseHeaderProps {
  className?: string;
}

const FrseHeader: React.FC<IFrseHeaderProps> = (props) => {
  const { className, children } = props;
  const classNames = cs('frse-header', className);

  return <header className={classNames}>{children}</header>;
};

export default FrseHeader;
