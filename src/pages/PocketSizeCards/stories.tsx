import { Story, Meta } from '@storybook/react/types-6-0'
import StickerCard from '.'

export default {
  title: 'StickerCard',
  component: StickerCard
} as Meta

export const Basic: Story = () => <StickerCard />
