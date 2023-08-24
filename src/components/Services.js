import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../Allcss/Services.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";




export const Services = () => {
  const { t } = useTranslation();
 
    return (
      
      <section className="srvs"  id="Services">
  
        
        <Container>
          <Row className="aligh-items-center">
            
            <Col xs={12} md={6} xl={7}>
              
              
               
                <div >
                  <span className="tagline"></span>
                  <br/>
                  <br/>
                  <br/>
                  <div className="srsc">
                 
         <h2 data-aos="fade-right"> Services. </h2>
         <h3 data-aos="fade-left">{t('services.wewrk')} </h3>
       
       
       
      </div>
      <div className="srvbtn">

      <div className="griddd-container">
      <NavLink  to="/Outsourcing">
      <div className="box1" data-aos="fade-up"> 
      <h4 className="box-title" >{t('services.Outs')}</h4>
      <div className="arrow-icon">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      </div>
  </NavLink>
  <NavLink   to="/3D-Visualization">
      <div className="box2" data-aos="fade-up" >
      <h4 className="box-title">{t('services.3d')}</h4>
      <div className="arrow-icon">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      </div>
     </NavLink>
     <NavLink   to="/Microsoft-solutions">
      <div className="box3" data-aos="fade-up" >
      <h4 className="box-title">{t('services.mcrsft')}</h4>
      <div className="arrow-icon">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      </div>
      </NavLink>
      <NavLink   to="/Web-3.0-solutions">
      <div className="box4" data-aos="fade-up"  >
      <h4 className="box-title">{t('services.web3')}</h4>
      <div className="arrow-icon">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      </div>
     </NavLink>
     <NavLink   to="/Cyberance">
      <div className="box5"  data-aos="fade-up">
      <h4 className="box-title">Cyberance</h4>
      <div className="arrow-icon">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      </div>
     </NavLink>
     <NavLink   to="/Digital-Marketing">
      <div className="box6" data-aos="fade-up" >
      <h4 className="box-title">{t('banner.Marketing')}</h4>
      <div className="arrow-icon">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      </div>
      </NavLink>
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
        
      </section>
     
    )
  }