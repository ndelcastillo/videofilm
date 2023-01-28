import React from 'react'
import Card from 'react-bootstrap/Card';
import './mainRe.css'

function MainRe() {
  return (
    <div className='justify-content-center align-items-center h-100 mt-3 pt-3' >
      <div className='row'>
        <div className='col-md-12'>
          <h1 style={{fontSize:"medium", color:"white"}} className='pb-0 mb-0'>REVIEWS</h1>
        </div>
      </div>
      <hr style={{ color: "white" }} />
      <div className='row d-flex justify-content-center '>
        <div className='col-md-3'>
          <Card className='bg-dark text-light' >
            <Card.Header>The Silence of The Lambs</Card.Header>
            <Card.Body >
              <blockquote className="blockquote mb-0">
                <div className='d-flex'>
                  <p className=''>
                  <q> They really didn’t need to go this hard for a puss in boots movie but I’m so glad they did. Everyone can thank spiderverse for opening the floodgates to colourful, whacky and creative big-budget animated movies. Fingers crossed they do something similarly stylised for the next Kung Fu Panda…</q>
                  </p>
                  <img className='w-25 h-100 mw-100 mh-100 ms-1 me-2' src="/assets/images/movies/theSilenceOfTheLambs.png" alt="" />
                </div>
                <footer className="blockquote-footer mt-2" style={{ fontSize: "small" }}>
                  @holafuegi
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-3'>
          <Card className='bg-dark text-light'>
            <Card.Header>The Lion King</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <div className='d-flex'>
                  <p className=''>
                 <q> I love that this movie only introduces one other kid character and the kid is so shitty that the entire audience is immediately like fuck that kid I hope M3GAN kills him good </q>
                  </p>
                  <img className='w-25 h-100 mw-100 mh-100 ms-1 me-2' src="/assets/images/movies/theLionKing.png" alt="" />
                </div>
                <footer className="blockquote-footer mt-2">
                  @julianpedomel
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-3'>
          <Card className='bg-dark text-light'>
            <Card.Header>Grave of The Fireflies</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <div className='d-flex'>
                  <p className=''>
                  <q> The kind of movie that makes you sit for 30 minutes and rethink every interaction you've ever had with your parents afterward </q>
                  </p>
                  <img className='w-25 h-100 mw-100 mh-100 ms-1 me-2' src="/assets/images/movies/graveOfTheFireflies.png" alt="" />
                </div>
                <footer className="blockquote-footer mt-2">
                  @mamalorta
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-3'>
          <Card className='bg-dark text-light'>
            <Card.Header>Back To The Future</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <div className='d-flex'>
                  <p className=''>
                  <q> Ralph Fiennes served and Anya Taylor-Joy ate </q>
                  </p>
                  <img className='w-25 h-100 mw-100 mh-100 ms-1 me-2' src="/assets/images/movies/backToTheFuture.png" alt="" />
                </div>
                <footer className="blockquote-footer mt-2">
                  @martincasamayor
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}


export default MainRe