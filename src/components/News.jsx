import React from 'react'
import { Container  } from 'react-bootstrap'
import bingo from '../assets/ranchobingo.jpg'

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
            <div className="col-6 article-container card">
                <img src={bingo} class="card-img-top" alt="bingo"/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div className="col-6 article-container card">
                Hi
            </div>

        </div>              
    </Container>
  )
}

export default News