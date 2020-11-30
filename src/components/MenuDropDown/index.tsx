import * as S from './styles'

interface ILinksProps {
  name: string
  link: string
}

interface IProps {
  links: ILinksProps[]
  open: boolean
}

const MenuDropDown: React.FC<IProps> = ({ links, open }) => {
  return (
    <S.Wrapper open={open}>
      {links.map(({ link, name }) => (
        <a key={name} href={link}>
          {name}
        </a>
      ))}
    </S.Wrapper>
  )
}

export default MenuDropDown
