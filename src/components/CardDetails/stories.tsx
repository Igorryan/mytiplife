import { Story, Meta } from '@storybook/react/types-6-0'
import CardDetails from '.'

export default {
  title: 'CardDetails',
  component: CardDetails
} as Meta

export const Basic: Story = () => <CardDetails />
