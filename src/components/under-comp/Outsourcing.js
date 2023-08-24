import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';



import browser from './images/browser.svg';
import presant from './images/presant.svg';
import wallet from './images/wallet.svg';
import { FaReact  } from 'react-icons/fa';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';



function Outsourcing() {
  const { t } = useTranslation()
  const imgp = t('OUTSOURCING.img');
  
  useEffect(()=>{
    Aos.init();
   },[])
   
  return (
    <div >
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
             
     <h2 data-aos="fade-right" > OUTSOURCING 4.0 </h2>
     
   
   
   
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
              <div className="hundrs">
             
     <h2 data-aos="fade-right" > {t('OUTSOURCING.title')} </h2>
     <h3 data-aos="fade-left" >{t('OUTSOURCING.undrtlt')} </h3>
   
  </div>

     <div className='parg ' data-aos="fade-up">
   <p > 
   {t('OUTSOURCING.prgrph')} 
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
    <section className="srvs" >
  
      
        <div >
        <Container className='contii'>
        
           
              
               
                <div >
               
              
        
   
   
      
      
      <div className="services-list" id='outcing'>
  <div data-aos="fade-up">
    <i className='rctq' ><FaReact /></i>
    <h2>{t('OUTSOURCING.crdtlt1')} </h2>
    <p>
    {t('OUTSOURCING.cardp1')}
    </p>
  
  </div>
  <div data-aos="fade-up">
    <i><img src={browser} alt="" /> </i>
    <h2>{t('OUTSOURCING.cardtlt2')}</h2>
    <p>
    {t('OUTSOURCING.cardp2')}
    </p>
   
  </div>
  <div className='greatt' data-aos="fade-up"> 
    <i ><img src={presant} alt="" /></i>
    <h2>{t('OUTSOURCING.cardtlt3')}</h2>
     <h2>{t('OUTSOURCING.cardtlt3-2')}</h2>
    <p>
    {t('OUTSOURCING.cardp3')}
    </p>
   
  </div>
  <div data-aos="fade-up">
    <i  ><img src={wallet} alt="" /></i>
    <h2>{t('OUTSOURCING.cardtlt4')}</h2>
    <p>
    {t('OUTSOURCING.cardp4')}
    </p>
  
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
      <section className="srvs" >
  
      
  <div >
  <Container className='contii'>
 
  <span className="taglinetop"></span>
      
     <h3 className='wlcmos' data-aos="fade-right">{t('OUTSOURCING.wlcm')}</h3>    
    
    


     <div className="whtrct">
  <div className="rctpic" data-aos="fade-left">
    <img src={imgp} alt=""  />
  </div>
  <div className="rctbnfts" data-aos="fade-right">
    <h2>{t('OUTSOURCING.wrbreact')}</h2>
    <p>
    {t('OUTSOURCING.lastp')}
    </p>
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

export default Outsourcing