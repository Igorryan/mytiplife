import { HTMLAttributes } from 'react'
import * as S from './styles'

interface ILinksProps {
  name: string
  link?: string
  action?: () => void
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  links: ILinksProps[]
  open: boolean | 'init'
}

const MenuDropDown: React.FC<IProps> = ({ links, open, ...rest }) => {
  return (
    <S.Wrapper open={open} {...rest}>
      {links.map(({ link, name, action }) => (
        <a key={name} onClick={action} href={link || '#'}>
          {name}
        </a>
      ))}
    </S.Wrapper>
  )
}

export default MenuDropDown
