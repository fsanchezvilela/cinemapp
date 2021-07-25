// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button, { Props } from '../src/common/view/components/button/Button';

export default {
  title: 'Cine-App/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args}> Button </Button>;

export const Primary = Template.bind({});
Primary.args = {
  buttonStyle: 'primary',
  buttonSize: 'm',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonStyle: 'secondary',
  buttonSize: 'm',
};

export const SecondaryAlternative = Template.bind({});
SecondaryAlternative.args = {
  buttonStyle: 'secondary-alternative',
  buttonSize: 'm',
};

export const Ghost = Template.bind({});
Ghost.args = {
  buttonStyle: 'ghost',
  buttonSize: 'm',
};

export const Accent = Template.bind({});
Accent.args = {
  buttonStyle: 'accent',
  buttonSize: 'm',
};

export const Link = Template.bind({});
Link.args = {
  buttonStyle: 'link',
  buttonSize: 'm',
};
export const Disabled = Template.bind({});
Disabled.args = {
  buttonStyle: 'primary',
  buttonSize: 'm',
  disabled: true,
};
