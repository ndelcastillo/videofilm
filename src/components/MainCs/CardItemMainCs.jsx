import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './cardItemMainCs.css'

function CardItemMainCs(props) {
  const { title, img, link } = props

  return (
    <div>
      <Card className='bg-dark text-light'>
        <div className='mx-auto w-100'>
          <Card.Img variant="top" src={img} className='mx-auto w-100' id='cardItemImg' alt='cardImg' />
        </div>
        <Card.Body>
          <Card.Title style={{ fontSize: "14px" }}>{title}</Card.Title>
          {/*<Card.Text>
            Hola
          </Card.Text>*/}
          <Stack className='justify-content-center mt-3' direction=''>
              <Button className='' variant="outline-secondary" size='sm'>
                <a style={{textDecoration:"none", color:"white"}} href={link}>► Trailer</a>
              </Button>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardItemMainCs