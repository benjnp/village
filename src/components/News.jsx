import React from 'react'
import { Container  } from 'react-bootstrap'
import bingo from '../assets/ranchobingo.jpg'
import nationalid from '../assets/nationalid.jpg'

const News = () => {
  return (
    <Container className="article-section">
        <h2>News and Announcements</h2>
        <div className="articles">
            {/* <div className="article-container col-6">
                <img src={bingo} alt="bingo" height={50}/>
            </div>
            <div className="article-container col-6">
                <img src={bingo} alt="bingo" height={50}/>
            </div> */}
            <div className="row d-flex justify-content-around">
                <div className="col-6 article-container">
                    <img src={bingo} class="card-img-top" alt="bingo"/>
                    <div class="card-body">
                        <h5 class="card-title">Bingo</h5>
                        <p class="card-text">Join the Bingo Socials on....</p>
                        <a href="#">See more...</a>
                    </div>
                </div>
                <div className="col-6 article-container">
                    <img src={nationalid} class="card-img-top" alt="bingo"/>
                    <div class="card-body">
                        <h5 class="card-title">Phil ID</h5>
                        <p class="card-text">Come and register for you to have your Phil ID...</p>
                        <a href="#">See more...</a>
                    </div>
                </div>             
            </div>
            <div className="row d-flex justify-content-around">
                <div className="col-6 article-container">
                    <img src={bingo} class="card-img-top" alt="bingo"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#">See more...</a>
                    </div>
                </div>
                <div className="col-6 article-container">
                    <img src={nationalid} class="card-img-top" alt="bingo"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#">See more...</a>
                    </div>
                </div>             
            </div>
                       
        </div>              
    </Container>
  )
}

export default News