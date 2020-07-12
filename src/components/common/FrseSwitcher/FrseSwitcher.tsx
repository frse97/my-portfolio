import React from 'react';
import cs from 'classnames';
import './FrseSwitcher.less';
import { PortfolioThemes } from '../../../../models/model';

interface IFrseSwitcher {
  /**
   * Additional classnames
   */
  className?: string;
  /**
   * Method onChange
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Theme passed by props to set the styling of the component
   */
  theme: PortfolioThemes;
}

const FrseSwitcher: React.FC<IFrseSwitcher> = (props) => {
  const { className, children, onChange } = props;

  const classNames = cs('frse-switch', className);

  return (
    <label id="frse-switch" className={classNames}>
      <input className="frse-switch-slider" type="checkbox" onChange={onChange} />
      <span className="frse-switch-slider frse-switch-slider-round">{children}</span>
    </label>
  );
};

export default FrseSwitcher;
