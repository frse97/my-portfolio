import React from 'react';
import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './FrseSettings.less';

interface IFrseSettingsProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FrseSettings: React.FC<IFrseSettingsProps> = (props) => {
  const { className, onClick } = props;
  const classNames = cs('frse-settings', className)

  return <button className={classNames} onClick={onClick} ><FontAwesomeIcon icon={faCog} /></button>;
};

export default FrseSettings;
