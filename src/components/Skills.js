import flask from "../assets/img/flask.svg";
import django from "../assets/img/django.svg";
import psql from "../assets/img/psql.svg";
import mongodb from "../assets/img/mongodb.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have a black belt in Python, a yellow belt in Javascripts, and a white belt in karate (just in case code debugging gets physical).</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <i class="fa-brands fa-python fa-5x" ></i>
                            </div>
                            
                            <div className="item">
                                <i class="fa-brands fa-square-js fa-5x"></i>
                            </div>
                            <div className="item">
                              <i class="fa-brands fa-react fa-5x"></i>
                            </div>
                            <div className="item">
                                <i class="fa-brands fa-node fa-5x"></i>
                            </div>
                            <div className="item">
                            <img src={django} alt="Image" style={{width: '80px', height: '80px'}}/>
                            </div>
                            <div className="item">
                            <img src={flask} alt="Image" style={{width: '75px', height: '75px'}}/>
                            </div>
                            
                            <div className="item" >
                            <img src={mongodb} alt="Image" style={{width: '140px', height: '70px'}}/>
                            </div>
                            <div className="item">
                            <img src={psql} alt="Image" style={{width: '75px', height: '75px'}}/>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
