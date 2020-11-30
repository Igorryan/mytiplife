import * as S from './styles'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState, useCallback, useEffect } from 'react'
import { useCart } from 'hooks/cart'

import Scroll from 'react-scroll'

import debounce from 'utils/debounce.js'
import Redirect from 'utils/Redirect'

import MenuDropDown from 'components/MenuDropDown'

const Header = () => {
  const { openCart, products } = useCart()

  const [anchor, setAnchor] = useState('aNewWayToReceiveMoney')
  const [menuOpen, setMenuOpen] = useState(false)
  const [myAccountMenuOpen, setMyAccountMenuOpen] = useState(false)
  const [headerToggle, setHeaderToggle] = useState(true)
  const [inputSearchFocus, setInputSearchFocus] = useState(false)

  useEffect(() => {
    if (window.location.href.indexOf('Home') !== -1) {
      setAnchor('aNewWayToReceiveMoney')
    } else {
      setAnchor('/Home?anchor=aNewWayToReceiveMoney')
    }

    const params = new URLSearchParams(window.location.search)

    if (params.get('anchor')) {
      Scroll.scroller.scrollTo('aNewWayToReceiveMoney', {
        duration: 1000,
        delay: 200,
        smooth: true,
        offset: -220
      })
    }
  }, [anchor])

  useEffect(() => {
    const debounceScrollFunction = debounce(() => {
      if (window.scrollY > 250) {
        setHeaderToggle(false)
      } else {
        setHeaderToggle(true)
      }
    }, 250)

    window.addEventListener('scroll', debounceScrollFunction)
  })

  const handleChangeMenuOpen = useCallback(() => {
    setMenuOpen(!menuOpen)
  }, [menuOpen])

  const handleInputSearchFocus = useCallback(() => {
    setInputSearchFocus(true)
  }, [])

  const handleInputSearchBlur = useCallback(() => {
    setInputSearchFocus(false)
  }, [])

  return (
    <S.Wrapper
      style={{
        top: (!menuOpen && headerToggle) || menuOpen ? 0 : '-120px'
      }}
    >
      <nav>
        <img onClick={() => Redirect('Home')} src="/img/logo.svg" alt="logo" />
        <S.MenuList toLeft={menuOpen}>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li
            onMouseEnter={() => setMyAccountMenuOpen(true)}
            onMouseLeave={() => setMyAccountMenuOpen(false)}
          >
            <a href="#">My Account</a>
            <MenuDropDown
              open={myAccountMenuOpen}
              links={[
                { link: 'OrderHistory', name: 'Order History' },
                { link: '#', name: 'Address' },
                { link: '#', name: 'Logout' }
              ]}
            />
          </li>
          <li>
            <a
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              href="https://www.mytiplife.com/site-pages/wetipyou"
            >
              Funding
            </a>
          </li>
          <li>
            <a
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              href="https://www.mytiplife.com"
            >
              Video
            </a>
          </li>
          <li>
            {anchor.indexOf('/') === -1 ? (
              <S.LinkMenu
                activeClass="active"
                to={anchor}
                spy={true}
                smooth={true}
                offset={-220}
                duration={500}
              >
                Categories
              </S.LinkMenu>
            ) : (
              <a href={anchor}>Categories</a>
            )}
          </li>
          <li>
            <S.IconCart
              onClick={() => {
                openCart()
                handleChangeMenuOpen()
              }}
            >
              {products.length > 0 && <strong>{products.length}</strong>}
            </S.IconCart>
          </li>
        </S.MenuList>

        <S.SearchBar
          style={{
            borderColor: inputSearchFocus ? '#FF7300' : '#bdbdbd'
          }}
        >
          <AiOutlineSearch
            style={{
              color: inputSearchFocus ? '#FF7300' : '#bdbdbd',
              transition: '0.2s'
            }}
            size={20}
          />

          <input
            type="text"
            onFocus={handleInputSearchFocus}
            onBlur={handleInputSearchBlur}
            placeholder="Search"
          />
        </S.SearchBar>

        <S.IconCart
          className="iconInMobileHeader"
          onClick={() => {
            openCart()
          }}
        >
          {products.length > 0 && <strong>{products.length}</strong>}
        </S.IconCart>

        <S.MenuBtn
          onClick={() => setMenuOpen(!menuOpen)}
          className={menuOpen ? 'open' : ''}
        >
          <div className="menu-btn_burger"></div>
        </S.MenuBtn>
        {/* <S.Icon onClick={handleChangeMenuOpen} size={40} color="#003d59" /> */}
      </nav>
    </S.Wrapper>
  )
}

export default Header
