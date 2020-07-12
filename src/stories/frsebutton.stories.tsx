import { storiesOf } from '@storybook/react';
import React from 'react';
import FrseButton from './../components/common/FrseButton/FrseButton';

storiesOf("FrseButton", module)
    .add("with text", () => (
        <FrseButton>Button</FrseButton>
    ))
    .add("without text", () => (
        <FrseButton></FrseButton>
    ));