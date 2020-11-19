import * as S from './styles'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState, useCallback, useEffect } from 'react'
import { useCart } from 'hooks/cart'

import debounce from 'utils/debounce.js'
import Redirect from 'utils/Redirect'

const Header = () => {
  const { openCart, products } = useCart()

  const [menuOpen, setMenuOpen] = useState(false)
  const [headerToggle, setHeaderToggle] = useState(true)
  const [inputSearchFocus, setInputSearchFocus] = useState(false)

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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Funding</a>
          </li>
          <li>
            <a href="#">Video</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <S.IconCart>
              <div
                onClick={() => {
                  openCart()
                  handleChangeMenuOpen()
                }}
              >
                {products.length > 0 && (
                  <div>
                    <strong>{products.length}</strong>
                  </div>
                )}
              </div>
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

        <S.IconCart className="cardIconNav">
          <div
            style={{ top: '-24px', width: 40, height: 40 }}
            onClick={() => {
              openCart()
            }}
          >
            {products.length > 0 && (
              <div style={{ width: 20, height: 20 }}>
                <strong style={{ fontSize: '12px', marginLeft: '6.4px' }}>
                  {products.length}
                </strong>
              </div>
            )}
          </div>
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
