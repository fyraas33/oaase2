import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import shield from './images/shield.svg'
import presant from './images/presant.svg'

import reactt from './images/react.svg'
import Aos from 'aos'
import { useTranslation } from 'react-i18next'

function Cyberance() {
  const { t } = useTranslation()
  useEffect(()=>{
    Aos.init();
   },[])
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
     
<h2 data-aos="fade-right"  > Cyberance</h2>





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
            <span className="taglinetop"></span>
              <br/>
              <br/>
              <br/>
              <div className="dghundrs">
             
     <h2 data-aos="fade-left"  > {t('cybre.1')}  </h2>
     
   
  </div>

     <div className='leadp' data-aos="fade-right" >
   <p> 
   {t('cybre.2')}
   </p>
    </div>
    
  

            
            </div>
            <span className="taglinebot"></span>
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

<div className="dvisi-list" id='cyberr'>
<div data-aos="fade-up" className='rctq'>
<i  ><img src={reactt} alt="" /></i>
<h2>{t('cybre.3')}</h2>

<p>
{t('cybre.4')}
</p>

</div>
<div data-aos="fade-up">
<i><img src={shield} alt="" /> </i>
<h2>{t('cybre.5')}</h2>
<p>
{t('cybre.6')}
</p>

</div>
<div className='greatt' data-aos="fade-up"> 
<i ><img src={presant} alt="" /></i>

<h2>{t('cybre.7')}</h2>
<p>
{t('cybre.8')}
</p>

</div>

</div>

<div className="spacee"></div>





          
          </div>
        
   
      <Col xs={50} md={100} xl={5}>
        
      </Col>
   <div>    
      
   <div className="spacee"></div>
   

   </div>
   
  </Container>
  </div>

</section>
<section className="srvs" >
  
      
  <div >
  <Container className='contii'>
 
  <span className="taglinetop"></span>
      
     <h3 className='wlcmos' data-aos="fade-right">{t('OUTSOURCING.wlcm')}</h3>    
    
    


     <div className="whtrct">
  <div className="rctpic" data-aos="fade-left">
  
  </div>
  <div className="rctbnfts" data-aos="fade-right">
    <h2>{t('cybre.9')}</h2>
    <p>
    {t('cybre.10')} </p>
  </div>
</div>



   <div>    
      
   <div className="spacee"></div>
   

   </div>
   
  </Container>
  </div>
  <div className="spacee"></div>
</section>
    </div>
  )
}

export default Cyberance