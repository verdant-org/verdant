import type { Meta, StoryObj } from '@storybook/react';

import LoadingScreen from './LoadingScreen';

const meta = {
  component: LoadingScreen,
} satisfies Meta<typeof LoadingScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};