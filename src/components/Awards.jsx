import React from 'react'
import { Container} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import medal1 from '../assets/medal1.jpg'
import medal2 from '../assets/medal2.jpg'
import medal3 from '../assets/medal3.jpg'

const Awards = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 5000, min: 1101 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1100, min: 801 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 465 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className="awards-section py-3">
        <Container>
        <h2>Awards</h2>
         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme awards-slider">
            <div className="item">
                <img src={medal1} alt="Image" />
                <h5>2022 Cleanest Community Award</h5>
            </div>
            <div className="item">
                <img src={medal2} alt="Image" />
                <h5>2021 Greenest Village Award</h5>
            </div>
            <div className="item">
                <img src={medal3} alt="Image" />
                <h5>2019 Cleanest Community Award</h5>
            </div>
            <div className="item">
                <img src={medal2} alt="Image" />
                <h5>2021 Greenest Village Award</h5>
            </div>
            <div className="item">
                <img src={medal3} alt="Image" />
                <h5>2019 Cleanest Community Award</h5>
            </div>
        </Carousel>
        </Container>
    </div>
  )
}

export default Awards