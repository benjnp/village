import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
        <div className="container-fluid mt-5 footer p-5 justify-content-between d-flex flex-column flex-md-row">
            <div className="d-flex flex-column">
            <div>
                Rancho 4-East Estate
            </div>
            <div>
                Brgy. Concepcion Dos, Marikina City
            </div>
            </div>
            <div className="d-flex flex-column">
            <div>
                Email: <a href="mailto:benjnp@gmail.com" target="_blank">rancho4east@gmail.com</a>
            </div>
            <div>
                Facebook: <a href="https://www.facebook.com" target="_blank">https://facebook.com</a>
            </div>
            </div>
        </div>
  )
}

export default Footer