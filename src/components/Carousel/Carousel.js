import React, { useState } from 'react'
import styled from 'styled-components'
import next from '../../assets/arrowslider.svg'

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 16px;
    margin-bottom: 0;
  }
  h2 {
    margin-top: 5px;
    font-size: 12px;
  }
`

const Testimonials = styled.div`
width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Arrow = styled.img`
   transform: ${({left}) => left ? 'rotate(180deg)' : ''};
   padding: 10px 10px;
`




const prevTesti = () => {
  console.log('prev')
}


const Carousel = () => {
  const [testiNo, switchTesti] = useState(1)

  const prevTesti = () => {
    if (testiNo === 1) switchTesti(testiNo - 1)  
    if (testiNo === 2) switchTesti(testiNo - 1) 
    if (testiNo === 0) switchTesti(testiNo + 2) 
  }

  const nextTesti = () => {
    if (testiNo === 1) switchTesti(testiNo + 1)  
    if (testiNo === 2) switchTesti(testiNo - 2)  
    if (testiNo === 0) switchTesti(testiNo + 1)  
  }


  return  (
<Wrapper>
    <Arrow left src={next}  onClick={prevTesti}/>
  
  { 
   (testiNo === 1) && (
   <Testimonials>
    <h1>Great Communication. Very easy process with suprising effect!</h1>
    <h2>Anna CEO at Payroll</h2>
    </Testimonials>
    )}
   { 
   (testiNo === 2) && (
   <Testimonials>
    <h1>Second</h1>
    <h2>Anna CEO at Payroll</h2>
    </Testimonials>
    )}
    { 
   (testiNo === 0) && (
   <Testimonials>
    <h1>Third</h1>
    <h2>Anna CEO at Payroll</h2>
    </Testimonials>
    )}
        
  
  
    
    <Arrow src={next}  onClick={nextTesti}/>
  </Wrapper>
  )
}
  



export default Carousel