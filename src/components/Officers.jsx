import React from 'react'
import { Container } from 'react-bootstrap'
import circleImage from '../assets/circleimage.jpg'

const Officers = () => {
  return (
    <Container className="officers-section">
        <h2>Officers</h2>
        <div className="row d-flex">
            <div className="col-3 officer-container">
                <img src={circleImage} alt="circle" height={90} />
                <span className="mt-3 fw-bold">Joseph Biden</span>
                <span className="mt-1 fst-italic">President</span>
            </div>
            <div className="col-3 officer-container">
                <img src={circleImage} alt="circle" height={90} />
                <span className="mt-3 fw-bold">Vlad Putin</span>
                <span className="mt-1 fst-italic">Vice President</span>
            </div>
            <div className="col-3 officer-container">
                <img src={circleImage} alt="circle" height={90} />
                <span className="mt-3 fw-bold">Si Jim Ping</span>
                <span className="mt-1 fst-italic">Treasurer</span>
            </div>
            <div className="col-3 officer-container">
                <img src={circleImage} alt="circle" height={90} />
                <span className="mt-3 fw-bold">Vlody Zelensky</span>
                <span className="mt-1 fst-italic">Sgt-at-arms</span>
            </div>
            <div className="col-3 officer-container">
                <img src={circleImage} alt="circle" height={90} />
                <span className="mt-3 fw-bold">Joseph Biden</span>
                <span className="mt-1 fst-italic">President</span>
            </div>
            <div className="col-3 officer-container">
                <img src={circleImage} alt="circle" height={90} />
                <span className="mt-3 fw-bold">Vlad Putin</span>
                <span className="mt-1 fst-italic">Vice President</span>
            </div>
            <div className="col-3 officer-container">
                <img src={circleImage} alt="circle" height={90} />
                <span className="mt-3 fw-bold">Si Jim Ping</span>
                <span className="mt-1 fst-italic">Treasurer</span>
            </div>
            <div className="col-3 officer-container">
                <img src={circleImage} alt="circle" height={90} />
                <span className="mt-3 fw-bold">Vlody Zelensky</span>
                <span className="mt-1 fst-italic">Sgt-at-arms</span>
            </div>
        </div>
    </Container>
  )
}

export default Officers