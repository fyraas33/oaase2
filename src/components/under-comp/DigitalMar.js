import Aos from 'aos';
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import target from './images/target.svg'
import piechart from './images/pichart.svg'
import tv from './images/tv.svg'
import { useTranslation } from 'react-i18next';

function DigitalMar() {
  const { t } = useTranslation()
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div>
        <section className="outsourcingh"  >

<header>
<Container  >
<Row className="aligh-items-center">

<Col xs={12} md={6} xl={7}>
  
  
   
    <div >
       <span className="tagline"></span>
      <br/>
      <br/>
      <br/>
      <div className="undrs">
     
<h2  data-aos="fade-right" > DIGITAL MARKETING</h2>





</div>


    
    </div>
  
</Col>

<div>    
<div className="spacee"></div>


</div>

</Row>
</Container>
</header>
</section>
<section className="outcont"  >
    <Container>
      <Row className="aligh-items-center">
        
        <Col xs={12} md={6} xl={7}>
          
          
           
            <div >
            <span className="taglinetopdg" ></span>
              <br/>
              <br/>
              <br/>
              <div className="dghundrs">
             
     <h2 data-aos="fade-left"  > {t('dgmark.1')}  </h2>
     
   
  </div>

     <div className='leadp' data-aos="fade-right" >
   <p> 
   {t('dgmark.2')} </p>
    </div>
    
  

            
            </div>
            <span className="taglinebotdg"></span>
        </Col>
        
     <div>    
     <div className="spacee"></div>
     

     </div>
      
      </Row>
    </Container>
    
    </section> 
    <section className="tweks" >
  
      
  <div >
  <Container className='contii'>
  


          <div >
         
        
  




<div className="services-list" id='mcrsft'>
<div data-aos="fade-up">
<i  ><img src={target} alt="" /></i>
<h2>{t('dgmark.3')}</h2>
<p>
{t('dgmark.4')}</p>

</div>
<div data-aos="fade-up">
<i><img src={piechart} alt="" /></i>
<h2>{t('dgmark.5')}</h2>
<p>
{t('dgmark.6')}</p>

</div>
<div className='greatt' data-aos="fade-up"> 
<i ><img src={tv} alt="" /></i>

<h2>{t('dgmark.7')}</h2>

<p>
{t('dgmark.8')}</p>

</div>

</div>

          
          </div>
        
   
      <Col xs={50} md={100} xl={5}>
        
      </Col>
   <div>    
      
   <div className="spacee"></div>
   <div className="spacee"></div>

   </div>
   
  </Container>
  </div>

</section>
    </div>
  )
}

export default DigitalMar