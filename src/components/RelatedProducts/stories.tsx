import { Story, Meta } from '@storybook/react/types-6-0'
import RelatedProducts from '.'

export default {
  title: 'RelatedProducts',
  component: RelatedProducts
} as Meta

export const Basic: Story = () => <RelatedProducts />
