import { Story, Meta } from '@storybook/react/types-6-0'
import Carousel from '.'

export default {
  title: 'Carousel',
  component: Carousel
} as Meta

export const Basic: Story = () => <Carousel />
