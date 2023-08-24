import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import 'animate.css';
import '../Allcss/About.css'
import { useTranslation } from "react-i18next";





export const About = () => {
  const { t } = useTranslation();
 
    return (
      <section className="srvs"  id="About">
  
        
        <Container >
          <Row className="aligh-items-center">
            
              
              
               
                <div >
                  <span className="tagline"></span>
                  <br/>
                  <br/>
                  <br/>
                  <div className="srsc">
                   
         <h2 data-aos="fade-right"> {t('about.abt')} </h2>
 
         <h3 data-aos="fade-left">{t('about.more')} </h3>
       
       
       
      </div>
    
   
                
                </div>
              
           
            <div className='mainn-containerr' >
            
              <div className='containera first-container' data-aos="fade-up">
  <div className='itemm-first' ></div>
      
    
  </div>
   <div className='containera second-container'  >
    <div className='itemm-second' data-aos="fade-up"></div>
    <div className='itemm-third' data-aos="fade-up"></div>
  </div>
  
            
         <div className="spacee"></div>
         
  
         </div>
  
          </Row>
          <div className="srvbtn">

<div className="griddd-container">

<div className="abtcrd" data-aos="fade-up">


  <h2 className='carddtitle'>{t('about.hwrt')}</h2>
 
  <br/> 
  <p>{t('about.hwrp')}</p>

</div>

<div className="abtcrd" data-aos="fade-up">


<h2 className='carddtitle'>{t('about.orphy')}</h2>

<br /> 
<p>{t('about.orphyp')}</p>

</div>


<div className="abtcrd" data-aos="fade-up">


  <h2 className='carddtitle'>{t('about.hwrk')}</h2>
  
  <br /> 
  <p>{t('about.hwrkp')}</p>

</div>


</div>


</div>

        </Container>
        <div className="spacee"></div>
      </section>
      
    )
  }