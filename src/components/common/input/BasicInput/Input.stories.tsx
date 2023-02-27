import { ComponentStory, ComponentMeta } from '@storybook/react';

import BasicInput from '.';

export default {
  title: 'Common/input/BasicInput',
  component: BasicInput,

  argTypes: {
    type: {
      options: ['text', 'password', 'number', 'email'],
      control: { type: 'select' },
      defaultValue: 'text',
    },
  },
} as ComponentMeta<typeof BasicInput>;

const Template: ComponentStory<typeof BasicInput> = (args) => (
  <BasicInput {...args} />
);

export const Input = Template.bind({});
Input.args = {};

export const LabelInput = Template.bind({});
LabelInput.args = {
  label: 'label',
};
