import React from 'react';
import { StoryFn } from '@storybook/react';
import FloatingWindow from '../components/FloatingWindow';

export default {
  title: 'Plugin/MyPlugin',
  component: FloatingWindow,
};

const Template: StoryFn = (args) => <FloatingWindow {...args} />;

export const Default = Template.bind({});
Default.args = {};