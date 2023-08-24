import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Aos from 'aos';
import brush from './images/brush.svg'
import browser1 from './images/browser.svg'
import graph3 from './images/bargraph.svg'
import presant3 from './images/presant.svg'
import adjustments from './images/adjustments.svg';
import megaphone from './images/megaphone.svg';
import line3 from './images/linegraph.svg';
import expand from './images/expand.svg';
import laptop from './images/laptop.svg'
import { useTranslation } from 'react-i18next';



function Websol() {
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
     
<h2 data-aos="fade-right">{t('services.web3')}</h2>






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
<section className="dvis" id='webdvis' >
  
      
  <div >
  <Container className='contii'>
  <div className='websoltlt' data-aos="fade-up">
<center><h1 className='tltl'> {t('web3.1')}</h1>
<p>{t('web3.2')}</p>
<p>{t('web3.3')}</p></center>
   </div>     
<div className="spacee"></div>
          <div >
         


<div className="dvisi-list" id='webthree'>
<div className='greatt' data-aos="fade-up" id='webone'>
<i ><img src={brush} alt="" /></i>
<h2>{t('web3.4')} </h2><h2>{t('web3.5')}</h2>
<p>
{t('web3.6')}</p>

</div>
<div data-aos="fade-up" id='webtwo'>
<i><img src={presant3} alt="" /> </i>
<h2>{t('web3.7')}</h2>

<p>
{t('web3.8')}</p>

</div>
<div className='greatt' data-aos="fade-up" id='webthrediv'> 
<i ><img src={browser1} alt="" /></i>

<h2>{t('web3.9')}</h2>
<h2>{t('web3.10')}</h2>
<p>
{t('web3.11')}</p>

</div>
<div  data-aos="fade-up" id='webfour'>
<i  ><img src={graph3} alt="" /></i>
<h2>{t('web3.12')}</h2>

<p>
{t('web3.13')}</p>
</div>
</div>







          
          </div>
        
   
     
   <div>    
      
   <div className="spacee"></div>
   

   </div>
   
  </Container>
  </div>

</section>
<section className="srvs" >
  
      
        <div >
        <Container className='contii'>
        
        
<center><h1 className='tltl' data-aos="fade-up"> {t('web3.14')}</h1>
<h1 className='tltl' data-aos="fade-up">{t('web3.15')}</h1></center>


       
<div className="spacee"></div>
              
               
                <div >
               
     
        
   
   
      
      
      <div className="services-list"  id='webthreee'>
  <div data-aos="fade-up">
    <i  ><img src={line3} alt="" /></i>
    <h2>{t('web3.16')}</h2>

    <p>
   <strong>{t('web3.17')}</strong> {t('web3.18')}
<strong>{t('web3.19')}</strong>{t('web3.20')}
    </p>
  
  </div>
  <div data-aos="fade-up">
    <i><img src={expand} alt="" /> </i>
    <h2>{t('web3.21')}</h2>
    <p>
   <strong>{t('web3.17')} </strong> {t('web3.22')}<br />
<strong>{t('web3.19')}</strong> {t('web3.23')}   </p>
   
  </div>
  <div  data-aos="fade-up"> 
    <i ><img src={laptop} alt="" /></i>
    
     <h2>{t('web3.24')} </h2>
    <p>
  <strong>{t('web3.17')}  </strong> {t('web3.25')} 
 <br />  <strong> {t('web3.19')}</strong> {t('web3.26')} 
    </p>
   
  </div>
  <div data-aos="fade-up">
    <i  ><img src={adjustments} alt="" /></i>
    <h2>{t('web3.27')} </h2>
    <p>
   <strong>{t('web3.17')}</strong> {t('web3.28')} <br />
<strong>{t('web3.19')}</strong> {t('web3.29')}  </p>
  
  </div>
  <div data-aos="fade-up">
    <i  ><img src={megaphone} alt="" /></i>
    <h2>{t('web3.30')}</h2>
    <p>
   <strong>{t('web3.17')}</strong> {t('web3.31')} <br />
<strong>{t('web3.19')}</strong>  {t('web3.32')}   </p>
  
  </div>
  <div data-aos="fade-up">
    <i  ><img src={graph3} alt="" /></i>
    <h2>{t('web3.33')}</h2>
    <p>
  <strong>{t('web3.17')}</strong>  {t('web3.34')} <br />
<strong>{t('web3.19')}</strong> {t('web3.35')}  </p>
  
  </div>
</div>

     
  
     
    
   
   
                
                </div>
              
         
            <Col xs={50} md={100} xl={5}>
              
            </Col>
         <div>    
            
         <div className="spacee"></div>
         
  
         </div>
         
        </Container>
        </div>
      
      </section>
    </div>
  )
}

export default Websol