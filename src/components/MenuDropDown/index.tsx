import * as S from './styles'

interface ILinksProps {
  name: string
  link?: string
  action?: () => void
}

interface IProps {
  links: ILinksProps[]
  open: boolean | 'init'
}

const MenuDropDown: React.FC<IProps> = ({ links, open }) => {
  return (
    <S.Wrapper open={open}>
      {links.map(({ link, name, action }) => (
        <a key={name} onClick={action} href={link || '#'}>
          {name}
        </a>
      ))}
    </S.Wrapper>
  )
}

export default MenuDropDown
