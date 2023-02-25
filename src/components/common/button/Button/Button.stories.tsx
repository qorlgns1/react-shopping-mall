import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';
import { ReactComponent as PlusIcon } from '../../../../assets/icon-plus.svg';

export default {
  title: 'Common/button/Button',
  component: Button,

  argTypes: {
    variant: {
      options: ['primary', 'white', 'dark'],
      control: { type: 'inline-radio' },
      defaultValue: 'primary',
    },
    size: {
      options: ['S', 'MS', 'M', 'L'],
      control: { type: 'inline-radio' },
      defaultValue: 'M',
    },
    children: {
      defaultValue: 'Button',
      control: { type: 'text' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {};

export const WhiteButton = Template.bind({});
WhiteButton.args = {
  variant: 'white',
};

export const DarkButton = Template.bind({});
DarkButton.args = {
  variant: 'dark',
};

export const IconButton = Template.bind({});
IconButton.args = {
  Icon: PlusIcon,
};

export const IconReverseButton = Template.bind({});
IconReverseButton.args = {
  Icon: PlusIcon,
  iconReverse: true,
};
