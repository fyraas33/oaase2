
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { Projects } from "./Projects"
import { TypeAnimation } from 'react-type-animation';
import Design from "./Design";
import { Services } from "./Services";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { Contact } from "./Contact";
import { useTranslation } from "react-i18next";
import { useTransition, animated } from '@react-spring/web';
import TypingEffect from "./TypingEffect";




export const Banner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { t } = useTranslation();
  

  const transitions = useTransition(
    `${t('banner.wedo')}\n${t('banner.digital')}`,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: 1000 }, // Animation duration
      loop: true, // Loop the animation
    }
  );


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      width: '75%',
      height: '75%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
   };
   const closeButtonStyles = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'red',
    fontSize: '1.5rem',
    cursor: 'pointer',
    position: 'absolute',
    top: '1px',
    right: '10px',
  };
 
  return (
    
    <section className="banner"  id="Home">

      <Container>
        
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           
            
            
             
              <div className= "animate__animated animate__fadeIn">
                <span className="tagline"></span>
                <br/>
                <br/>
                <br/>
                
                <div className="wedo">
      
                <h1>
                  
          <TypingEffect  />
        </h1>

    </div>
    <button className="vvd" onClick={openModal} ><span>{t('banner.start')} </span></button>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <Contact/>
       <button onClick={closeModal} style={closeButtonStyles}>
          &#10060;
        </button>
      </Modal>
              </div>
            
          </Col>
          <Col xs={50} md={100} xl={5}>
           
             
                <div className= "animate__animated animate__zoomIn" >
                  <div className="bgimg" >
                    
                    </div>
                    
                </div>
            
          </Col>
       <div>    
      
       
        <Projects/>
        <div className="w-full h-screen absolute topp-0 left-0">
        <Design />
      </div>
      
       </div>
        </Row>
      </Container>
    
    </section>
  )
}
