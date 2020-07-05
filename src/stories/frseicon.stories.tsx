import { storiesOf } from '@storybook/react';
import React from 'react';
import { Sun, Moon } from '../components';

storiesOf('FrseIcon', module)
  .add('sun', () => <Sun />)
  .add('moon', () => <Moon />);