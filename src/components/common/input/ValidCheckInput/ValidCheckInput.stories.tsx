import { ComponentStory, ComponentMeta } from '@storybook/react';

import ValidCheckInput from '.';

export default {
  title: 'Common/input/ValidCheckInput',
  component: ValidCheckInput,

  argTypes: {
    type: {
      options: ['text', 'password', 'number', 'email'],
      control: { type: 'select' },
      defaultValue: 'text',
    },
  },
} as ComponentMeta<typeof ValidCheckInput>;

const Template: ComponentStory<typeof ValidCheckInput> = (args) => (
  <ValidCheckInput {...args} />
);

export const Input = Template.bind({});
Input.args = {};

export const LabelInput = Template.bind({});
LabelInput.args = {
  label: 'label',
};
