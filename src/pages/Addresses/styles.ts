import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;

  background: #f5f5f5;
`

export const Section = styled.section`
  width: 1000px;
  margin: 0 auto;
  margin-top: 160px;
`

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 60px;

  h1 {
    color: #003d59;
    font-size: 24px;
  }
`

export const Addresses = styled.ul`
  display: flex;
`

export const Address = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 10px;

  &:first-of-type {
    margin-left: 0;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 28px;
    position: absolute;
    margin-top: -44px;
    border-radius: 140px;

    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    font-size: 14px;

    color: #ffb843;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }

  background: #fff;
  width: 320px;
  height: 250px;
  padding: 30px 34px;
  border-radius: 15px;

  font-family: 'Rubik', sans-serif;
  color: #1b1b1b;
  font-weight: 300;
  font-size: 14px;

  .addressDescription {
    width: 100%;
    margin-top: 10px;
    font-size: 14px;
  }

  .buttonsWrapper {
    width: 100%;
    bottom: 20px;
    margin: 0 auto;

    button {
      width: 50%;
      height: 40px;
      font-size: 16px;

      :nth-of-type(1) {
        background: #ffb843;
        color: #fff;

        border-radius: 5px;
        letter-spacing: 3px;
        font-weight: 900;
        transition: background 0.4s;

        :hover {
          background: #ffa200;
        }
      }

      :nth-of-type(2) {
        background: transparent;
        color: #8a8a8a;
      }
    }
  }
`
