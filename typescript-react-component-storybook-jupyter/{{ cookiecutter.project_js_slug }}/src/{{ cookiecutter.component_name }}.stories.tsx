import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {{ cookiecutter.component_name }} from './{{ cookiecutter.component_name }}';

export default {
  title: '{{ cookiecutter.component_name }}',
  component: {{ cookiecutter.component_name }},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    // example props
    some_property: 'test',
  },
} as ComponentMeta<typeof {{ cookiecutter.component_name }}>;

const Template: ComponentStory<typeof {{ cookiecutter.component_name }}> = (args) => <{{ cookiecutter.component_name }} {...args} />;

export const Default = Template.bind({});
