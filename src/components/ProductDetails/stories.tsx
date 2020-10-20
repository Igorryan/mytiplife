import { Story, Meta } from '@storybook/react/types-6-0'
import ProductDetails from '.'

export default {
  title: 'ProductDetails',
  component: ProductDetails
} as Meta

export const Basic: Story = () => <ProductDetails />
