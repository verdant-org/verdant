import type { Preview } from "@storybook/react";
import "../src/app/globals.css"
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ClerkProvider>
            <Story />
      </ClerkProvider>
    ),
  ]
};

export default preview;
