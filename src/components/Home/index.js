import { Carousel } from 'react-bootstrap';
import React, { useRef } from 'react';
import mern from '../../assets/home/MERN.png'

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
            <div className="col-5">
              <img src={mern} alt="code-stack" className="code-stack"/>
            </div>
            <div className="col-7">
              <h1 className="jumbotron-primary display-4">Hi, I'm Jason, Full Stack Web Developer</h1>
              <p className="lead">I love to build and create.</p>

              {/* <h4 class="my-4"></h4>
              <p></p> */}
              <p className="lead">
                <a className="btn btn-primary btn-lg" href='https://github.com/jasongrossman' target="_blank" role="button" rel="noreferrer">Check out my work</a>

              </p>
            </div>
          </div>

  
          <div className="jumbotron-two row" id="second-hero">
            <div className="col-7">
            <h1 className="display-4">I'm immersed in the world of Business</h1>
            <p className="lead-two">I've worked in Retail, Energy, Pharma, and Tech, but am always learning about new industries.</p>
            {/* <h4 class="my-4"></h4>
            <p></p> */}
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="https://www.linkedin.com/in/jason-grossman-1a082430/" target="_blank" role="button" rel="noreferrer">Explore my Experiences</a>
            </p>
          </div>
          <div className="col-5"></div>
          </div>

          <div className="jumbotron row" id="third-hero">
            <div className="col-7">
            <div>               
              <Carousel className="carousel">
                <h3> Some of my favourite photos from my travels... </h3>
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
            <div className="col-5">
            <h1 className="display-4">I also have hobbies and interests!</h1>
            <p className="lead">I am an avid traveller, a rabid sports fan, a foodie, and so much more! </p>
            <h4 className="my-4">Follow my socials to keep up.</h4>
            {/* <p></p> */}
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#About" role="button">Follow along</a>
            </p>
          </div>
          </div>


        </section>
    )
}

export default Home;