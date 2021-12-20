import { Carousel } from 'react-bootstrap';
import React, { useRef } from 'react';
import toronto from '../../assets/home/toronto.jpg'
import cover from '../../assets/home/cover.jpg'
function Home() {


  const travelPics = useRef([
    {
      id: 0,
      img: 'kyoto' 
    },
    {
      id: 1,
      img: 'white-haven'
    },
    {
      id: 2,
      img: 'siargao'
    },
    {
      id: 3,
      img: 'ao-nang'
    },
    {
      id: 4,
      img: 'colosseum'
    },
    {
      id: 5,
      img: 'anfield'
    },
    {
      id: 6,
      img: 'angkor-wat'
    },
    {
      id: 7,
      img: 'costa-rica'
    },
    {
      id: 8,
      img: 'ninh-binh'
    },
    {
      id: 9,
      img: 'london'
    },
    {
      id: 10,
      img: 'sydney'
    },
    {
      id: 11,
      img: 'mt-batur'
    },
    {
      id: 12,
      img: 'singapore'
    },
    {
      id: 13,
      img: 'amsterdam'
    },
    {
      id: 14,
      img: 'pnohm-penh'
    }
  ]);

    return (
      
        <section className="home">
          <div className="jumbotron-one row" id="hero">
          <img src={cover} alt="home-cover" className="home-cover"/>
            <div className="col-5">
            </div>
            <div className="hero-cta-container col-7">
              <h1 className="jumbotron-primary display-4"> I'm Jason, a Full Stack Web Developer</h1>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href='https://github.com/jasongrossman' target="_blank" role="button" rel="noreferrer">Check out my work</a>
              </p>
            </div>
          </div>

            <div className="jumbotron-two row" id="second-hero">
            <div className="col-7">
            <h1 className="jumbotron-secondary display-4">I'm immersed in the world of Business</h1>
            <p className="lead-two">I've worked in Retail, Energy, Pharma, and Tech, but am always learning about new industries.</p>
            </div>

          <div className="col-5">
          <img src={toronto} alt="toronto-skyline" className="toronto"/>

          </div>
          <p className="lead col-lg-7 col-md-12">
              <a className="btn btn-secondary btn-lg" href="https://www.linkedin.com/in/jason-grossman-1a082430/" target="_blank" role="button" rel="noreferrer">Explore my Experiences</a>
            </p>

          </div>

          <div className="jumbotron-three row" id="third-hero">
            <div className="col-lg-7 col-md-12">
            <div className="carousel-container">   
            <h3 className="travel-caption"> Some of my favourite photos from my travels... </h3>
            
              <Carousel className="carousel col-lg-7 col-md-12">
                {travelPics.current.map(travelPic => (
                  <Carousel.Item>
                    <img
                    className="travel-pic"
                    src={require(`../../assets/home/travel/${travelPic.img}.jpg`).default} 
                    alt='travel'
                    key={travelPic.id}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

            </div>
            </div>
            <div className="col-lg-5 col-md-12">
            <h1 className="lead-three display-4">I also love adventure</h1>
            <p className="lead">I am an avid traveller, passionate sports fan, foodie, and so much more... </p>
            <p className="lead">Follow my socials to keep up.</p>
            {/* <p></p> */}
            <p className="lead">
              <a className="btn btn-tertiary btn-lg" href="https://twitter.com/Jason_Grossman" target="_blank" role="button" rel="noreferrer">Follow along</a>
            </p>
          </div>
          </div>


        </section>
    )
}

export default Home;