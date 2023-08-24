import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import AI from './images/ai.png'

import outs from './images/outs.png'
import webtroi from './images/web3.png'

import Aos from 'aos';
import { useTranslation } from 'react-i18next'

function Insgh() {
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
     
<h2 data-aos="fade-right" > INSIGHTS</h2>






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
<section className="tweks" >
  
      
  <div >
  <Container className='contii'>
  


          <div >
         
        
  




<div className="insghtt-list" id='insghtt'>
<div data-aos="fade-up">
  
<i  ><img src={outs} alt="" /></i>

<p>OUTSOURCING</p>
<h2>{t('insght.1')}</h2>
<div className='descrp'>
<p>
{t('insght.2')}</p>
<p>{t('insght.3')}</p>
</div>
</div>
<div data-aos="fade-up" className='aipic'>

<p>AI</p>
<h2>{t('insght.4')}</h2>
<div className='descrp'>
<p>
{t('insght.5')}</p>
<p>{t('insght.6')}</p>
</div>
<i ><img src={AI} alt="" /></i>
</div>
<div data-aos="fade-up" className='aipicmob'>
<i ><img src={AI} alt="" /></i>
<p>AI</p>
<h2>{t('insght.4')}</h2>
<div className='descrp'>
<p>
{t('insght.5')}</p>
<p>{t('insght.6')}</p>
</div>

</div>

<div  data-aos="fade-up"> 
<i  ><img src={webtroi} alt="" /></i>
<p>WEB 3.0</p>
<h2>{t('insght.7')}</h2>
<div className='descrp'>
<p>
{t('insght.8')}</p>
<p>{t('insght.9')}</p>
</div>
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

export default Insgh