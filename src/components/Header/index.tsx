import * as S from './styles'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState, useEffect, useRef, useCallback } from 'react'

const Header = () => {
  const [inputSearchFocus, setInputSearchFocus] = useState(false)

  const handleInputSearchFocus = useCallback(() => {
    setInputSearchFocus(true)
  }, [])

  const handleInputSearchBlur = useCallback(() => {
    setInputSearchFocus(false)
  }, [])

  return (
    <S.Wrapper>
      <img src="/img/logo.svg" alt="Logo MyTipLife" />

      <a href="#">Home</a>
      <a href="#">My Account</a>
      <a href="#">Funding</a>
      <a href="#">Video</a>
      <a href="#">Categories</a>
      <a href="#">Cart</a>

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
    </S.Wrapper>
  )
}

export default Header
