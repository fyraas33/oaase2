import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import oaasedesk from './images/oassedesk.jpg'
import Aos from 'aos';
import Map from '../Map';
import { useTranslation } from 'react-i18next';

function Allcntct() {
  const { t } = useTranslation()
  useEffect(()=>{
    Aos.init();
  });
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(t('contact.8'));
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText(t('contact.9'));
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: t('contact.10')});
    } else {
      setStatus({ succes: false, message: t('contact.11')});
    }
  };
      
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
     
<h2 data-aos="fade-right"  > Contact</h2>





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
<section className="srvs" >
  
      
  <div >
  <Container className='contii'>
 
 
    
    


     <div className="whtrct">
  <div className="rctpic" data-aos="fade-left">
    <img src={oaasedesk} alt="" />
  </div>
  <div className="rctbnfts" data-aos="fade-right">
  <div className='cnctp'>
    <p> {t('contact.12')}</p>
    <p>{t('contact.13')}</p>
   </div>
    
  </div>
</div>



   <div>    
      

   

   </div>
   
  </Container>
  </div>
  <div className="spacee"></div>
</section>
<section className="allcnct" id="connect">
      <Container>
        <Row className="align-items-center">
        
          <Col size={12} md={6}>
           
            
                <div  >
                <h2>{t('contact.1')}</h2>
                <p>{t('contact.2')}</p>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder={t('contact.3')} onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder={t('contact.4')} onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder={t('contact.5')} onChange={(e) => onFormUpdate('email', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      
                      <select  value={formDetails.service} onChange={(e) => onFormUpdate('service', e.target.value)} required>
                      <option value="1">{t('contact.6')}</option>
                   <option value="Outsourcing">Outsourcing</option>
                     <option value="3D Visualization">3D Visualization</option>
                     <option value="Microsoft Solutions">Microsoft Solutions</option>
                   <option value="Web 3.0 Solutions">Web 3.0 Solutions</option>
                     <option value="Cybrance">Cybrance</option>
                     <option value="Digital Marketing">Digital Marketing</option>
                   </select>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder={t('contact.7')} onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
           
          </Col>
          <Col size={12} md={6}>
           
        <Map/>
               
            
           </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Allcntct