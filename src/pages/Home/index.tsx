import * as S from 'styles/Home/styles'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Redirect from 'utils/Redirect'
import Products from 'data/Products'

import Button from 'components/Button'

import Tilt from 'react-parallax-tilt'
import { useEffect } from 'react'
import debounce from 'utils/debounce'
import { Link } from 'react-scroll'

const Home: React.FC = () => {
  useEffect(() => {
    const target = document.querySelectorAll<HTMLDivElement>('[data-anime]')
    const animationClass = 'animate'

    function animeScroll() {
      const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4
      target.forEach((element) => {
        if (windowTop > element.offsetTop) {
          element.classList.add(animationClass)
          element.classList.remove('animateOut')
        } else {
          element.classList.remove(animationClass)
          element.classList.add('animateOut')
        }
      })
    }
    animeScroll()

    const debounceScrollFunction = debounce(() => {
      animeScroll()
    }, 250)

    window.addEventListener('scroll', debounceScrollFunction)
  })

  return (
    <S.Wrapper>
      <Header />
      <section>
        <div className="header">
          <h1>Customized products for you to earn more tips</h1>
          <p>
            Choose your product, customize it as you wish and start earning
            tips.
          </p>
          <Link
            activeClass="active"
            to="aNewWayToReceiveMoney"
            spy={true}
            smooth={true}
            offset={-220}
            duration={500}
          >
            <Button>Show me</Button>
          </Link>
        </div>
        <img src="/img/banner-home.svg" alt="" />
      </section>

      <div data-anime="flip" className="title">
        <img src="/img/home_illustration_1.svg" alt="" />
        <h1 id="aNewWayToReceiveMoney">A new way to receive money</h1>
      </div>

      <S.Products>
        {Products.map(
          (
            {
              id,
              tags,
              title,
              description,
              price,
              productImage,
              toProductPageURL
            },
            i
          ) => (
            <div
              key={id}
              className={i % 2 === 0 ? 'left' : 'right'}
              data-anime={i % 2 === 0 ? 'left' : 'right'}
            >
              <img src={productImage} alt="" />

              <div className="description">
                <ul className="tags">
                  {tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>

                <h1>{title}</h1>
                <p>{description}</p>

                <div>
                  <p>
                    $<strong>{price.toFixed(2)}</strong>
                  </p>
                  <Button
                    onClick={() => Redirect(`Products/${toProductPageURL}`)}
                  >
                    Personalize
                  </Button>
                </div>
              </div>
            </div>
          )
        )}
      </S.Products>

      <div className="divisor"></div>

      <div className="cards" data-anime="center">
        <S.Card>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="#ffffff"
            glarePosition="bottom"
            scale={1.08}
            transitionSpeed={2500}
            style={{ background: '#11CEA2' }}
          >
            <img src="/img/advertisin.png" alt="" />
            <div className="descriptionCard">
              <h2>Advertising</h2>
              <p>Exposure to your exact local audience!</p>
            </div>
          </Tilt>
        </S.Card>
        <S.Card>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="#ffffff"
            glarePosition="bottom"
            scale={1.08}
            transitionSpeed={2500}
            style={{ background: '#705A22' }}
          >
            <img src="/img/founders-wall.png" alt="" />
            <div className="descriptionCard">
              <h2>Founders Wall</h2>
              <p>
                Your money is all yours.100% of what you earn goes straight to
                you.{' '}
              </p>
            </div>
          </Tilt>
        </S.Card>

        <S.Card>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="#ffffff"
            glarePosition="bottom"
            scale={1.08}
            transitionSpeed={2500}
            style={{ background: '#4875F0' }}
          >
            <img src="/img/promo-products.png" alt="" />
            <div className="descriptionCard">
              <h2>Promo Products</h2>
              <p>
                Our Kickstarter package provides personalized products with your
                business logo and QR code.{' '}
              </p>
            </div>
          </Tilt>
        </S.Card>

        <S.Card>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="#ffffff"
            glarePosition="bottom"
            scale={1.08}
            transitionSpeed={2500}
            style={{ background: '#EBAB0D' }}
          >
            <img
              style={{ width: '220px', marginTop: '20px' }}
              src="/img/coupon-distribution.png"
              alt=""
            />
            <div className="descriptionCard">
              <h2>Coupon Distribution</h2>
              <p>
                Included in our Kickstarter Restaurant Package is coupon
                distribution direct to your local audience!{' '}
              </p>
            </div>
          </Tilt>
        </S.Card>
      </div>

      <Footer></Footer>
    </S.Wrapper>
  )
}

export default Home
