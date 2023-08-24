import { Container, Row, Col } from "react-bootstrap";

import 'animate.css';
import '../Allcss/Solutions.css'
import cube from "../assets/img/cube.svg";
import analytic from "../assets/img/analytics.svg";
import lead from "../assets/img/lead.svg";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { useTranslation } from "react-i18next";



export const Solutions = () => {
  const { t } = useTranslation();
 useEffect(()=>{
  Aos.init();
 },[])
 

    return (
      <section className="srvs"  id="Solutions">
  
      
        <div >
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
             
              
               
                <div >
                  <span className="tagline"></span>
                  <br/>
                  <br/>
                  <br/>
                  <div className="srsc">
         <h2  data-aos="fade-right"> Solutions. </h2>
         <h3 data-aos="fade-left">{t('solutions.wdo')}</h3>
       
       
       
      </div>
      <div className="srvbtn" >
   
      <div className="griddd-container" >
      
      <div  className="carddd" data-aos="fade-up">
      
      <div className="icon-container">
      <img className="cube" src={cube} alt="Icon" />
        </div>
        <h2 className='carddtitle'>RealtyLens </h2>
        <h2>{t('solutions.title1')}</h2>
        <hr /> 
        <p>{t('solutions.solcp1')}</p>
    
    </div>
    
      
     
      <div className="carddd" data-aos="fade-up">
      
    <div className="icon-container">
    <img src={lead} alt="Icon" />
      </div>
      <h2 className='carddtitle'>OAAX</h2>
      <h2>{t('solutions.title2')}</h2>
      <hr /> 
      <p>{t('solutions.solcp2')}</p>
  
  </div>

  
  <div  className="carddd" data-aos="fade-up" >
      
      <div className="icon-container">
      <img className="anly" width="100" height="100" viewBox="0 0 100 100" src={analytic} alt="Icon" />
      
        </div>
        <h2 className='carddtitle'>OAAX</h2>
        <h2>{t('solutions.title3')}</h2>
        <hr /> 
        <p>{t('solutions.solcp3')}</p>
    
    </div>
     
     
    </div>
     
    
      </div>
   
                
                </div>
              
            </Col>
            <Col xs={50} md={100} xl={5}>
              
            </Col>
         <div>    
            
         <div className="spacee"></div>
         
  
         </div>
          </Row>
        </Container>
        </div>
      
      </section>
      
    )
  }