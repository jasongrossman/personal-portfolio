import React from 'react';

function Home() {

    return (
        <section className="home">
            <div>
                <h1>
                    A timeline of my professional journey...
                </h1>
                
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://wallsdesk.com/wp-content/uploads/2016/08/White-Abstract-Screenshots.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Full Stack Developer</h5>
        <p>Graduated from the University of Toronto School of Continuing Studies in their Coding Bootcamp. Can build scalable, responsive web applications using the MERN (MongoDb, Express, React, Node) stack enabled by JavaScript.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://www.criteo.com/wp-content/uploads/2020/05/black-and-white-blank-challenge-connect-262488-scaled.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Category Management</h5>
        <p>I've built winning strategies in the retail world. From digital enhancements to real-world innovation, I know how to create strategy and bring it to market. </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Data Analytics</h5>
        <p>Working in both small and large datasets, I can extract valuable insights and tell compelling stories behind the numbers. I can visualize information, and explain complex concepts in a way that is easy for others to understand.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </section>
    )
}

export default Home;