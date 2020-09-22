import { Story, Meta } from '@storybook/react/types-6-0'
import Card1 from '.'

export default {
  title: 'Card1',
  component: Card1
} as Meta

export const Basic: Story = () => <Card1 />
