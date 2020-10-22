import * as S from './styles'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState, useCallback, useEffect } from 'react'
import { handleOpenCart } from '../../hooks/cart'

import debounce from '../../utils/debounce.js'

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false)
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

  const handleChangeMenuToggle = useCallback(() => {
    setMenuToggle(!menuToggle)
  }, [menuToggle])

  const handleInputSearchFocus = useCallback(() => {
    setInputSearchFocus(true)
  }, [])

  const handleInputSearchBlur = useCallback(() => {
    setInputSearchFocus(false)
  }, [])

  return (
    <S.Wrapper
      style={{
        top: (!menuToggle && headerToggle) || menuToggle ? 0 : '-120px'
      }}
    >
      <nav>
        <img src="/img/logo.svg" alt="logo" />
        <S.MenuList toLeft={menuToggle}>
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
            <a href="#" onClick={handleOpenCart}>
              Cart
            </a>
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
        <S.Icon onClick={handleChangeMenuToggle} size={40} color="#003d59" />
      </nav>

      {/* <img src="/img/logo.svg" alt="Logo MyTipLife" />
      <nav>
        <a href="#">Home</a>
        <a href="#">My Account</a>
        <a href="#">Funding</a>
        <a href="#">Video</a>
        <a href="#">Categories</a>
        <a href="#">Cart</a>
      </nav>
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
      </S.SearchBar> */}
    </S.Wrapper>
  )
}

export default Header
