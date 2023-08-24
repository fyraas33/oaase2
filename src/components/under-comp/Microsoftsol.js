import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import line from './images/linegraph.svg'
import expand from './images/expand.svg'
import megaphone from './images/megaphone.svg'
import adjustments from './images/adjustments.svg'
import bargraph from './images/bargraph.svg'
import laptop from './images/laptop.svg'
import Aos from 'aos';
import { useTranslation } from 'react-i18next'

function Microsoftsol() {
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
     
<h2 data-aos="fade-right"> MICROSOFT SOLUTIONS</h2>






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
  
<h1 className='tltl' data-aos="fade-up"><center> {t('mcrsft.1')} </center></h1>
<div className='pgmcrsft' data-aos="fade-up">
<center><p>{t('mcrsft.2')}
</p><p>{t('mcrsft.3')}</p></center>
       </div> 
<div className="spacee"></div>
          <div >
         
        
  




<div className="services-list" id='mcrsft'>
<div data-aos="fade-up">
<i  ><img src={line} alt="" /></i>
<h2>MICROSOFT 365</h2>
<p>
{t('mcrsft.4')}
</p>

</div>
<div data-aos="fade-up">
<i><img src={expand} alt="" /></i>
<h2>MICROSOFT DYNAMICS 365</h2>
<p>
{t('mcrsft.5')}
</p>

</div>
<div className='greatt' data-aos="fade-up"> 
<i ><img src={megaphone} alt="" /></i>

<h2>MICROSOFT TEAMS</h2>
<h2>{t('mcrsft.6')}</h2>
<p>
{t('mcrsft.7')}
</p>

</div>
<div data-aos="fade-up">
<i  ><img src={adjustments} alt="" /></i>
<h2>{t('mcrsft.8')}</h2>
<p>
{t('mcrsft.9')}
</p>
</div>
<div data-aos="fade-up">
<i  ><img src={bargraph} alt="" /></i>
<h2>{t('mcrsft.10')}</h2>
<p>
{t('mcrsft.11')}</p>
</div>
<div data-aos="fade-up">
<i  ><img src={laptop} alt="" /></i>
<h2>{t('mcrsft.12')}</h2>
<p>
{t('mcrsft.13')}</p>
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

export default Microsoftsol