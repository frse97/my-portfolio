import React from 'react';
import cs from 'classnames';
import './FrseButton.less';

type FrseButtonType = {
  LINK: 'link';
};

interface IFrseButton {
  className?: string;
  type?: FrseButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FrseButton: React.FC<IFrseButton> = (props) => {
  const { className, children, onClick } = props;

  const classNames = cs('frse-btn', className);

  return <button className={classNames} onClick={onClick} >{children}</button>;
};

export default FrseButton;
