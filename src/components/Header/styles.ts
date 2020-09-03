import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  padding: 3rem 0;
  border: 1px solid #eeeeee;

  img {
    width: 120px;
    margin-right: 22px;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;

    font-size: 14px;
    color: #003d59;
    margin: 0 2rem;
    border-bottom: 1px solid transparent;
    transition: border 0.4s;

    :hover {
      border-bottom: 1px solid #003d59;
    }
  }
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 22px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  padding: 0 10px;
  transition: border 0.2s;

  input {
    width: 150px;
    padding: 0 10px;
    font-size: 12px;

    border: none;
    color: #003d59;
    outline: none;
    ::placeholder {
      color: #bdbdbd;
    }
  }
`
