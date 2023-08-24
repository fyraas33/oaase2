import Aos from 'aos';
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GiGreekTemple } from "react-icons/gi";
import brush from './images/brush.svg'
import browser1 from './images/browser.svg'
import play from './images/play.svg'
import line from './images/linegraph.svg'
import expand1 from './images/expand.svg'
import laptop1 from './images/laptop.svg'
import adjust from './images/adjustments.svg'
import Slider from './Slider';
import { useTranslation } from 'react-i18next';


function Visualization() {
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
     
<h2  data-aos="fade-right"> {t('3d.1')} </h2>





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
<section className="dvis" >
  
      
  <div >
  <Container className='contii'>
  
<h1 className='tltl' data-aos="fade-up"><center> {t('3d.2')}</center></h1>
        
<div className="spacee"></div>
          <div >
         
        
  



<center>
<div className="dvisi-list" id='thrdee'>
<div className='greatt' data-aos="fade-up">
<i ><img src={brush} alt="" /></i>
<h2>{t('3d.3')}</h2>
<p>
{t('3d.4')}


</p>

</div>
<div data-aos="fade-up">
<i><GiGreekTemple/> </i>
<h2>{t('3d.5')}</h2>
<p>
{t('3d.6')}
</p>

</div>
<div className='greatt' data-aos="fade-up"> 
<i ><img src={browser1 } alt="" /></i>

<h2>{t('3d.7')}</h2>
<p>
{t('3d.8')}
</p>

</div>
<div className='greatt' data-aos="fade-up">
<i  ><img src={play} alt="" /></i>
<h2>{t('3d.9')}</h2>
<p>
{t('3d.10')}
</p>
</div>
</div>
</center>






          
          </div>
        
   
      <Col xs={50} md={100} xl={5}>
        
      </Col>
   <div>    
      
   <div className="spacee"></div>
   

   </div>
   
  </Container>
  </div>

</section>

<section className="tweks" >
  
      
  <div >
  <Container className='contii'>   
  <h1 className='tltl' data-aos="fade-up"><center> {t('3d.11')}</center></h1> 
    
<div className="spacee"></div> 

          <div >
<center>
<div className="dvisi-list" id='samdy'>
<div data-aos="fade-up">
<i  ><img src={line} alt="" /></i>
<h2>{t('3d.12')}</h2>
<p>
{t('3d.13')}
</p>

</div>
<div data-aos="fade-up">
<i><img src={expand1} alt="" /> </i>
<h2>{t('3d.14')}</h2>
<p>
{t('3d.15')}
</p>

</div>
<div className='greatt' data-aos="fade-up"> 
<i ><img src={laptop1} alt="" /></i>

<h2>{t('3d.16')}</h2>
<p>
{t('3d.17')}
</p>

</div>
<div data-aos="fade-up">
<i  ><img src={adjust} alt="" /></i>
<h2>{t('3d.18')}</h2>
<p>
{t('3d.19')}
</p>
</div>
</div>


</center>




          
          </div>
        
   
      <Col xs={50} md={100} xl={5}>
        
      </Col>
   <div>    
      
   <div className="spacee"></div>
   

   </div>
   
  </Container>
  </div>
<Slider/>
</section>
<div className="spacee"></div>






    </div>
  )
}

export default Visualization