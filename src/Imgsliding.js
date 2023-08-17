import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Imgsliding() {
  return (

    <div className='sliding'>

      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://storage.sg.content-cdn.io/in-resources/9da1b8bc-3471-4bdb-b60f-2b3b880d25c3/Images/userimages/banners/april23/apparels-desk-19apr.jpg"
          alt=""
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://storage.sg.content-cdn.io/in-resources/9da1b8bc-3471-4bdb-b60f-2b3b880d25c3/Images/userimages/banners/april23/travel-gear-desk-19apr.jpg"
          alt=""
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://storage.sg.content-cdn.io/in-resources/9da1b8bc-3471-4bdb-b60f-2b3b880d25c3/Images/userimages/banners/april23/toiletries-desk-19apr.jpg"
          alt=""
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Imgsliding
